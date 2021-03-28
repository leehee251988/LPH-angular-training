import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonInfo } from './_models/person-info';
import { personData } from './_services/person-data';
import { PersonService } from './_services/person-services';
import { PersonInfoDialogComponent } from './person-info-dialog/person-info-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public displayedColumns: string[] = ['name', 'address', 'birth', 'email', 'image', 'action'];
  public dataSource = new MatTableDataSource<PersonInfo>(personData);
  private personSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, public personServices: PersonService) { }

  ngOnInit(): void {
    this.personServices.getAllPersonInfo();
    this.personSubscription = this.personServices.persons$.subscribe(response => {
      console.log('dataSource-data:', response);
      this.dataSource.data = response;
    });
  }

  ngOnDestroy(): void {
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAddClick(): void {
    const dialogRef = this.dialog.open(PersonInfoDialogComponent, {
      width: '600px',
      data: { title: 'create', person: new PersonInfo() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personServices.addPersonInfo(result);
      }
    });
  }

  onEditClick(data: PersonInfo) {
    const dialogRef = this.dialog.open(PersonInfoDialogComponent, {
      width: '600px',
      data: { title: 'edit', person: data }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personServices.editPersonInfo(result);
      }
    });
  }

  onDeleteClick(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { // [mat-dialog-close]="true"
        this.personServices.deletePersonInfo(id);
      }
    });
  }
}
