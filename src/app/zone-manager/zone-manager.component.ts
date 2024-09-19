import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Zone } from '../interfaces/zone.interface';
import { ZoneNameDialogComponent } from '../zone-name-dialog/zone-name-dialog.component';
import { ServerAccessorService } from '../server-accessor.service';


@Component({
  selector: 'app-zone-manager',
  templateUrl: './zone-manager.component.html',
  styleUrls: ['./zone-manager.component.css']
})
export class ZoneManagerComponent {
  constructor(public dialog: MatDialog, private serverAccessor: ServerAccessorService) {
    this.loadZones();
  }
  // Store existing zones as an array of points
  zones: Zone[] = [];

  // Points for the currently drawn polygon
  currentPoints: [number, number][] = [];
  points: string = '';

  // Flag for when drawing is active
  isDrawing: boolean = false;

  // Start drawing a new polygon
  startDrawing() {
    this.currentPoints = [];
    this.points = ''
    this.isDrawing = true;
  }

  // Add a point to the polygon being drawn
  addPoint(event: MouseEvent) {
    if (this.isDrawing) {
      const x = event.offsetX;
      const y = event.offsetY;
      this.currentPoints.push([x, y]);
      if(this.currentPoints.length === 4) {
        this.finishDrawing();
      }
      this.points += `${x},${y} `;
    }
  }

  // Finish drawing and save the new polygon
  finishDrawing() {
    if (this.isDrawing) {
      const dialogRef = this.dialog.open(ZoneNameDialogComponent, {
        width: '300px',
        data: { name: '' }
      });

      dialogRef.afterClosed().subscribe(name => {
        if (name) {
          this.serverAccessor.createZone(name, this.currentPoints).subscribe(
            (newZone: Zone) => {
              this.zones.push(newZone);
              this.isDrawing = false;
              this.currentPoints = [];
            }
          );
        }
      });
    }
  }

  // Delete a zone from the list
  deleteZone(index: number) {
    const zoneId = this.zones[index].id;
    this.serverAccessor.deleteZone(zoneId).subscribe(() => {
      this.zones.splice(index, 1);
    });
  }

  private loadZones() {
    this.serverAccessor.fetchZones().subscribe((zones: Zone[]) => {
      this.zones = zones;
    });
  }
}
