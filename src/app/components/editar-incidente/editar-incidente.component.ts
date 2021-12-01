import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IncidenteService } from 'src/app/services/incidente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-incidente',
  templateUrl: './editar-incidente.component.html',
  styleUrls: ['./editar-incidente.component.scss']
})

export class EditarIncidenteComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private incidenteService: IncidenteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarIncidenteComponent>,
    private fb: FormBuilder
  ) 
  { 
    console.log(data);

    this.form = this.fb.group({
      id: new FormControl(data.incidente?.id || '', [Validators.required]),
      descricao: new FormControl(data.incidente?.descricao || '', [Validators.required]),
      solucao: new FormControl(data.incidente?.solucao || '', [Validators.required]),
      imagem: new FormControl(data.incidente?.imagem || '', [Validators.required]),
      endereco: new FormControl(data.incidente?.endereco || '', [Validators.required]),
      tipo_comunique: new FormControl(data.incidente?.tipo_comunique || '', [Validators.required]),
      usuario_app: new FormControl(data.incidente?.usuario_app || '', [Validators.required]),
      data_insercao: new FormControl(data.incidente?.data_insercao || '', [Validators.required]),
      status: new FormControl(data.incidente?.status || '', [Validators.required]),
      endereco_id: new FormControl(data.incidente?.endereco_id || '', [Validators.required]),
      tipo_comunique_id: new FormControl(data.incidente?.tipo_comunique_id || '', [Validators.required]),
      usuario_app_id: new FormControl(data.incidente?.usuario_app_id || '', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  editItem(): void {
    let obj = this.form.getRawValue()
    let jsonData = JSON.stringify(obj);
    console.log(jsonData)
    this.incidenteService.updateIncidenteId(jsonData, this.data.incidente.id)
      .then((response) => {
        console.log(response);
        Swal.fire('Incidente atualizado com sucesso', '', 'success').then(
          () => window.location.reload()
        );
      })
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
