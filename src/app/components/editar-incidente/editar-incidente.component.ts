import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-incidente',
  templateUrl: './editar-incidente.component.html',
  styleUrls: ['./editar-incidente.component.scss']
})

export class EditarIncidenteComponent implements OnInit {
  //form?: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarIncidenteComponent>,
    //private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close({ });
  }
}
