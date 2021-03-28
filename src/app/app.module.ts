import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterComponent } from './router/router.component';
import { Pages404Component } from './pages404/pages404.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { PersonInfoDialogComponent } from './home/person-info-dialog/person-info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './home/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    RouterComponent,
    Pages404Component,
    ChildAComponent,
    ChildBComponent,
    ConfirmDialogComponent,
    PersonInfoDialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
