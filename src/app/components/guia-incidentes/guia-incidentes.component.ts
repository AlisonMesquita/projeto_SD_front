import { Component, OnInit } from '@angular/core';
import { Incidente } from 'src/app/interfaces/incidentes_model';
//import { INCIDENTES } from 'src/app/mock-incidentes';
import { EditarIncidenteComponent } from '../editar-incidente/editar-incidente.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-guia-incidentes',
  templateUrl: './guia-incidentes.component.html',
  styleUrls: ['./guia-incidentes.component.scss']
})

export class GuiaIncidentesComponent implements OnInit {
  incidentes = new MatTableDataSource<Incidente>();
  responseData: any;
  displayedColumns = ['options', 'descricao', 'endereco', 'tipo', 'usuario', 'dataCriacao', 'status'];

  constructor(
    private incidenteService: IncidenteService,
    public dialog: MatDialog
  ) { 
  }

  ngOnInit(): void {
    this.incidenteService.getAllIncidentes().then(data => {
      this.responseData = data;
      this.incidentes = this.responseData.response;
      console.log(this.incidentes);
    })
  }

  openDialog(incidente?: any): void {
    const dialogRef = this.dialog.open(EditarIncidenteComponent, {
      data: {
        incidente: incidente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: " + result);
      console.log('The dialog was closed');
    });
  }

  deleteItem(incidente: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Deseja mesmo remover esse item?',
      confirmButtonText: 'Remover',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if(result.isConfirmed) {
        this.incidenteService.
          deleteIncidenteById(incidente.id)
            .then((response) => {
              Swal.fire('Removido com sucesso', '', 'success');
              window.location.reload();
            })
        console.log("Removido");
      }
    });
  }

}
