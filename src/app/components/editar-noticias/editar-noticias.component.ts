import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-editar-noticias',
  templateUrl: './editar-noticias.component.html',
  styleUrls: ['./editar-noticias.component.scss']
})

export class EditarNoticiasComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private noticiaService: NoticiaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarNoticiasComponent>,
    private fb: FormBuilder
  ) { 
    console.log(data);

    this.form = this.fb.group({
      id: [data.noticia?.id || '', [Validators.required]],
      descricao: [data.noticia?.descricao || '', [Validators.required]],
      titulo: [data.noticia?.titulo || '', [Validators.required]],
      imagem: [data.noticia?.imagem || ''],
      categoria: [data.noticia?.categoria || '', [Validators.required]],
      usuario: [data.noticia?.usuario || ''],
      dataCriacao: [data.noticia?.dataCriacao || '']
    })
  }

  ngOnInit(): void {
    
  }

  editItem(): void {
    let data = '';
    console.log(this.form.value.categoria);
    this.noticiaService.updateNews(this.form.value.id, this.form.value.descricao, this.form.value.titulo, this.form.value.categoria, 
      data)
      .then((response) => {
        console.log(response);
        Swal.fire('Notícia editada com sucesso', '', 'success').then(
          () => window.location.reload()
        );
      })
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
