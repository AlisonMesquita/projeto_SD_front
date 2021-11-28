import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaIncidentesComponent } from './guia-incidentes.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path     : 'guia-incidentes',
    component: GuiaIncidentesComponent
  }
];

@NgModule({
  declarations: [
    GuiaIncidentesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class GuiaIncidentesModule { }
