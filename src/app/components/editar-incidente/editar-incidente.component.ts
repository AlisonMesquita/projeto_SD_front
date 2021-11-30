import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-incidente',
  templateUrl: './editar-incidente.component.html',
  styleUrls: ['./editar-incidente.component.scss']
})

export class EditarIncidenteComponent implements OnInit {
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarIncidenteComponent>,
    private fb: FormBuilder
  ) {
      //     id: number;
      //     descricao: string;
      //     solucao?: string;
      //     imagem?: string;
      //     endereco: string;
      //     tipo: string;
      //     usuario: string;
      //     dataCriacao: string;
      //     status: string;
    this.form = this.fb.group({
      id: new FormControl(data?.id || '', [Validators.required]),
      descricao: new FormControl(data?.descricao || '', [Validators.required]),
      solucao: new FormControl(data?.solucao || '', [Validators.required]),
      imagemPath: new FormControl('', [Validators.required]),
      imagem: new FormControl(data?.imagem || '', [Validators.required]),
      endereco: new FormControl(data?.endereco || '', [Validators.required]),
      tipo: new FormControl(data?.tipo || '', [Validators.required]),
      usuario: new FormControl(data?.usuario || '', [Validators.required]),
      dataCriacao: new FormControl(data?.dataCriacao || '', [Validators.required]),
      status: new FormControl(data?.status || '', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
