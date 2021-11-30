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
  ) 
  { 
    console.log(data);
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
      id: new FormControl(data.incidente?.id || '', [Validators.required]),
      descricao: new FormControl(data.incidente?.descricao || '', [Validators.required]),
      solucao: new FormControl(data.incidente?.solucao || '', [Validators.required]),
      imagemPath: new FormControl('', [Validators.required]),
      imagem: new FormControl(data.incidente?.imagem || '', [Validators.required]),
      endereco: new FormControl(data.incidente?.endereco || '', [Validators.required]),
      tipo: new FormControl(data.incidente?.tipo || '', [Validators.required]),
      usuario: new FormControl(data.incidente?.usuario || '', [Validators.required]),
      dataCriacao: new FormControl(data.incidente?.dataCriacao || '', [Validators.required]),
      status: new FormControl(data.incidente?.status || '', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
