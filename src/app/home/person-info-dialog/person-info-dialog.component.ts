import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-person-info-dialog',
  templateUrl: './person-info-dialog.component.html',
})
export class PersonInfoDialogComponent {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PersonInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
