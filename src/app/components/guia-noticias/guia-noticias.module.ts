import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaNoticiasComponent } from './guia-noticias.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path     : 'guia-noticias',
    component: GuiaNoticiasComponent
  }
];

@NgModule({
  declarations: [
    GuiaNoticiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GuiaNoticiasModule { }
