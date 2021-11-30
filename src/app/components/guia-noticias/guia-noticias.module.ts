import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaNoticiasComponent } from './guia-noticias.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule
  ]
})
export class GuiaNoticiasModule { }
