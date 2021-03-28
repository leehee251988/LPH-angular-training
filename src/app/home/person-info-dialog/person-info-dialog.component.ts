import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-person-info-dialog',
  styleUrls: ['person-info-dialog.component.css'],
  templateUrl: './person-info-dialog.component.html',
})
export class PersonInfoDialogComponent {
  formInstance: FormGroup;
  titleInstane = '';

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PersonInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; person: any; }) {

    this.formInstance = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.pattern(/^[\w\s]+$/)]),
      birth: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      image: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data.person);
    this.titleInstane = data.title;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.formInstance.valid) {
      this.dialogRef.close(this.formInstance.value);
    }
  }
}
