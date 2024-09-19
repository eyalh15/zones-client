import { Component } from '@angular/core';
import { Zone } from '../interfaces/zone.interface';

@Component({
  selector: 'app-zone-manager',
  templateUrl: './zone-manager.component.html',
  styleUrls: ['./zone-manager.component.css']
})
export class ZoneManagerComponent {
  // Store existing zones as an array of points
  zones: Zone[] = [{ 
      "id": 1, 
      "name": "zone 1",
      "points": [[500, 500], [10, 10], [200, 90], [400, 50]] 
    }];

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
      console.log(this.currentPoints)
    }
  }

  // Finish drawing and save the new polygon
  finishDrawing() {
    if (this.isDrawing) {
      // ask for zone name
      const name = 'zone 2';
      this.zones.push({ 
        "id": this.zones[this.zones.length -1]['id'] + 1, 
        "name": name, 
        "points": this.currentPoints
      });
    }
    this.isDrawing = false;
    this.currentPoints = [];
  }

  // Delete a zone from the list
  deleteZone(index: number) {
    this.zones.splice(index, 1);
  }
}
