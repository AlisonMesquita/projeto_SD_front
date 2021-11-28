import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaAnaliseComponent } from './guia-analise.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class GuiaAnaliseModule { }
