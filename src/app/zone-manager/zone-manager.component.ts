import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Zone } from '../interfaces/zone.interface';
import { ZoneNameDialogComponent } from '../zone-name-dialog/zone-name-dialog.component';
import { ServerAccessorService } from '../server-accessor.service';


@Component({
  selector: 'app-zone-manager',
  templateUrl: './zone-manager.component.html',
  styleUrls: ['./zone-manager.component.css'],
})
export class ZoneManagerComponent {
  constructor(public dialog: MatDialog, private serverAccessor: ServerAccessorService
  ) {
    this.loadZones();
  }
  // Store all zones
  zones: Zone[] = [];
  // Points for the currently drawn polygon
  currentPoints: [number, number][] = [];
  // binded to the toggle selector (creation/deletion)
  toggleMode: string = 'creation'; 
  // The mode state
  isCreationMode: boolean = true;


  // Start drawing a new polygon
  startDrawing() {
    this.currentPoints = [];
    this.isCreationMode = true;
  }

  // Add a point to the polygon being drawn
  addPoint(event: MouseEvent) {
    if (this.isCreationMode) {
      const x = event.offsetX;  
      const y = event.offsetY;
      this.currentPoints = [...this.currentPoints, [x, y]];
      // Finish drawing after getting polygon of 4 points
      if(this.currentPoints.length === 4) {
        this.finishDrawing();
      }
    }
  }

  // Finish drawing and save the new polygon
  finishDrawing() {
    if (this.isCreationMode) {
      const dialogRef = this.dialog.open(ZoneNameDialogComponent, {
        width: '300px',
        data: { name: '' }
      });

      dialogRef.afterClosed().subscribe(name => {
        if (name) {
          this.serverAccessor.createZone(name, this.currentPoints).subscribe(
            (newZone: Zone) => {
              this.zones.push(newZone);
              this.currentPoints = [];
            }
          );
        }
      });
    }
  }

  // Delete a zone from the list
  deleteZone(index: number) {
    console.log(this.isCreationMode)
    if(this.isCreationMode) {
      return;
    }
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

  onModeChange(mode: string) {
    this.isCreationMode = (mode === 'creation');
    if(!this.isCreationMode)
      this.currentPoints = [];
    console.log(this.zones)
  }
}
