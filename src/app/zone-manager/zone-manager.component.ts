import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Zone } from '../interfaces/zone.interface';
import { ServerAccessorService } from '../server-accessor.service';
import { ZoneNameDialogComponent } from '../dialogs/zone-name-dialog/zone-name-dialog.component';
import { ZoneDeleteDialogComponent } from '../dialogs/zone-delete-dialog/zone-delete-dialog.component';


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

  zones: Zone[] = [];

  // Currently been drawn zone points
  currentPoints: [number, number][] = [];

  // Start drawing a new zone
  startDrawing() {
    this.currentPoints = [];
  }

  // Add a point to zone being drawn
  addPoint(event: MouseEvent) {
    const x = event.offsetX; 
    const y = event.offsetY;
    this.currentPoints = [...this.currentPoints, [x, y]];
    // Finish drawing after getting polygon of 4 points
    if(this.currentPoints.length === 4) {
      this.finishDrawing();
    }
  }

  // Finish drawing and save the new polygon
  finishDrawing() {
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

  onRightClick(event: MouseEvent, zoneIndex: number) {
    // Reset polygon creation
    this.currentPoints = [];

    // Prevent the default context menu from appearing
    event.preventDefault();
    
    if(zoneIndex === -1)
        return;
    
    // Capture mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Open the delete confirmation dialog
    const dialogRef = this.dialog.open(ZoneDeleteDialogComponent, {
      data: { x: mouseX, y: mouseY, zoneIndex: zoneIndex }
    });

    // If the user confirmed deletion, delete the zone
    dialogRef.afterClosed().subscribe(zoneIndex => {
      // Dialog closed without delete click
      if(zoneIndex === undefined)
        return 

      this.deleteZone(zoneIndex);
      
    });
  }  
}
