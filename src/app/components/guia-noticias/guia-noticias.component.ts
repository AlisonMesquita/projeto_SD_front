import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias_model';
//import { NOTICIAS } from 'src/app/mock-noticias';
import Swal from 'sweetalert2';
import { EditarNoticiasComponent } from '../editar-noticias/editar-noticias.component';
import { CadastrarNoticiasComponent } from '../cadastrar-noticias/cadastrar-noticias.component';
import { MatDialog} from '@angular/material/dialog';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-guia-noticias',
  templateUrl: './guia-noticias.component.html',
  styleUrls: ['./guia-noticias.component.scss']
})

export class GuiaNoticiasComponent implements OnInit {
  noticias?: Noticias[];
  responseData: any;
  form!: FormGroup;

  constructor(
    private noticiaService: NoticiaService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.noticiaService.getAllNews().then(data => {
      this.responseData = data;
      this.noticias = this.responseData.response;
    })
  }

  openDialog(noticia?: any): void {
    const dialogRef = this.dialog.open(EditarNoticiasComponent, {
      data: {
        noticia: noticia
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: " + result);
      console.log('The dialog was closed');
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CadastrarNoticiasComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: " + result);
      console.log('The dialog was closed');
    });
  }

  deleteItem(item: any) {
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
        this.noticiaService.
          deleteNews(item.id)
            .then((response) => {
              Swal.fire('Removido com sucesso', '', 'success');
              window.location.reload();
            })
        console.log("Removido");
      }
    });
  }

}
