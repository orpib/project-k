import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
