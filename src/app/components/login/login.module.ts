import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path     : 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class LoginModule { }
