import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaAnaliseComponent } from './guia-analise.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path     : 'guia-analise',
    component: GuiaAnaliseComponent
  }
];

@NgModule({
  declarations: [
    GuiaAnaliseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class GuiaAnaliseModule { }
