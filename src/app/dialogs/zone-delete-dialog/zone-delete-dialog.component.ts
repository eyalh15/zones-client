import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-zone-delete-dialog',
  templateUrl: './zone-delete-dialog.component.html',
  styleUrl: './zone-delete-dialog.component.css'
})
export class ZoneDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ZoneDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { x: number, y: number, zoneIndex: number }
  ) {
    // Adjust dialog position
    this.dialogRef.updatePosition({
      top: `${data.y}px`,
      left: `${data.x}px`
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
