import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-zone-name-dialog',
  templateUrl: './zone-name-dialog.component.html'
})
export class ZoneNameDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ZoneNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
