import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { Pages404Component } from './pages404/pages404.component';
import { RouterComponent } from './router/router.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator-component', component: CalculatorComponent },
  {
    path: 'router-component',
    component: RouterComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pages404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
