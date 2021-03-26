import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonInfoDialogComponent } from './person-info-dialog/person-info-dialog.component';

export interface PersonInfoElement {
  id: number;
  name: string;
  code: number;
  address: string;
  birth: string;
  email: string;
  image: any;
}

const ELEMENT_DATA: PersonInfoElement[] = [
  { id: 1, name: 'Hydrogen', code: 11, address: 'H', birth: '1/2/1998', email: 'm@gmail.com', image: 'https://www.w3schools.com/tags/img_girl.jpg' },
  { id: 2, name: 'Helium', code: 12, address: 'He', birth: '2/4/1998', email: 'm@gmail.com', image: 'https://www.w3schools.com/tags/img_girl.jpg' },
  { id: 3, name: 'Lithium', code: 13, address: 'Li', birth: '2/4/1998', email: 'm@gmail.com', image: 'https://www.w3schools.com/tags/img_girl.jpg' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'birth', 'email', 'image', 'action'];
  dataSource = ELEMENT_DATA;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PersonInfoDialogComponent, {
      width: '700px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
