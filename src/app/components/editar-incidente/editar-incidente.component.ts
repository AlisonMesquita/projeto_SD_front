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
      id: new FormControl(data.incidente?.id || ''),
      descricao: new FormControl(data.incidente?.descricao || ''),
      solucao: new FormControl(data.incidente?.solucao || ''),
      imagem: new FormControl(data.incidente?.imagem || ''),
      endereco: new FormControl(data.incidente?.endereco || ''),
      tipo_comunique: new FormControl(data.incidente?.tipo_comunique || ''),
      usuario_app: new FormControl(data.incidente?.usuario_app || ''),
      data_insercao: new FormControl(data.incidente?.data_insercao || ''),
      status: new FormControl(data.incidente?.status || '', [Validators.required]),
      parecer: new FormControl(data.incidente?.parecer || '', [Validators.required]),
      endereco_id: new FormControl(data.incidente?.endereco_id || ''),
      tipo_comunique_id: new FormControl(data.incidente?.tipo_comunique_id || ''),
      usuario_app_id: new FormControl(data.incidente?.usuario_app_id || ''),
    });
  }

  ngOnInit(): void {
  }

  editItem(): void {
    let data = '';

    this.incidenteService.updateIncidenteId(this.form.value.parecer, this.form.value.status, this.data.incidente.id, data)
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
