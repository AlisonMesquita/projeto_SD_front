import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

// Páginas
import { GuiaAnaliseModule } from './components/guia-analise/guia-analise.module';
import { GuiaIncidentesModule } from './components/guia-incidentes/guia-incidentes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarIncidenteComponent } from './components/editar-incidente/editar-incidente.component';

const appRoutes: Routes = [
  {
    path: "**",
    redirectTo: "/",
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditarIncidenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuiaAnaliseModule,
    GuiaIncidentesModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
