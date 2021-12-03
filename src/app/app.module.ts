import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

// Páginas
import { GuiaAnaliseModule } from './components/guia-analise/guia-analise.module';
import { GuiaIncidentesModule } from './components/guia-incidentes/guia-incidentes.module';
import { GuiaNoticiasModule } from './components/guia-noticias/guia-noticias.module';
import { HomeModule } from './components/home/home.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarIncidenteComponent } from './components/editar-incidente/editar-incidente.component';
import { EditarNoticiasComponent } from './components/editar-noticias/editar-noticias.component';
import { CadastrarNoticiasComponent } from './components/cadastrar-noticias/cadastrar-noticias.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: "**",
    redirectTo: "/home",
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditarIncidenteComponent,
    EditarNoticiasComponent,
    CadastrarNoticiasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    //Páginas
    GuiaAnaliseModule,
    GuiaIncidentesModule,
    GuiaNoticiasModule,
    HomeModule,

    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
