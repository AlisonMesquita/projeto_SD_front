import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Incidente } from 'src/app/interfaces/incidentes_model';
//import { INCIDENTES } from 'src/app/mock-incidentes'; // Array com fake data
import { EditarIncidenteComponent } from '../editar-incidente/editar-incidente.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-guia-incidentes',
  templateUrl: './guia-incidentes.component.html',
  styleUrls: ['./guia-incidentes.component.scss']
})

export class GuiaIncidentesComponent implements OnInit, AfterViewInit {
  //incidentes: Incidente[] = [];  // Armazena fake data na var que é do tipo Incidente[] 
  //incidentes = new MatTableDataSource<Incidente>(INCIDENTES);
  incidentes = new MatTableDataSource<Incidente>();
  responseData: any;
  displayedColumns = ['options', 'descricao', 'endereco', 'tipo', 'usuario', 'dataCriacao', 'status'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  form!: FormGroup;

  constructor(
    private incidenteService: IncidenteService,
    public dialog: MatDialog,  // Inicia uma instância do dialog
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      filtro: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.incidenteService.getAllIncidentes().then(data => {
      //console.log(data);
      this.responseData = data;
      this.incidentes = this.responseData.response;
      console.log(this.incidentes);
    })
  }

  ngAfterViewInit() {
    this.incidentes.paginator = this.paginator;
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
              console.log(response);
              Swal.fire('Removido com sucesso', '', 'success');
              window.location.reload();
            })
        console.log("Removido");
      }
    });
  }

}
