import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/interfaces/incidentes_model';
import { INCIDENTES } from 'src/app/mock-incidentes'; // Array com fake data
import { EditarIncidenteComponent } from '../editar-incidente/editar-incidente.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-guia-incidentes',
  templateUrl: './guia-incidentes.component.html',
  styleUrls: ['./guia-incidentes.component.scss']
})

export class GuiaIncidentesComponent implements OnInit {
  incidentes: Incidente[] = INCIDENTES;  // Armazena fake data na var que é do tipo Incidente[] 
  displayedColumns = ['actions', 'descricao', 'endereco', 'tipo', 'usuario', 'dataCriacao', 'status'];

  constructor(
    public dialog: MatDialog  // Inicia uma instância do dialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditarIncidenteComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
