import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-cadastrar-noticias',
  templateUrl: './cadastrar-noticias.component.html',
  styleUrls: ['./cadastrar-noticias.component.scss']
})
export class CadastrarNoticiasComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private noticiaService: NoticiaService,
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CadastrarNoticiasComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      imagem: [''],
      categoria: ['', [Validators.required]]
    })
  }

  createItem(): void {
    let data = '';
    let user = 1;

    this.noticiaService.createNews(this.form.value.descricao, this.form.value.titulo, user, this.form.value.categoria, data)
      .then((response) => {
        console.log(response);
        Swal.fire('Notícia cadastrada com sucesso', '', 'success').then(
          () => window.location.reload()
        );
      })
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
