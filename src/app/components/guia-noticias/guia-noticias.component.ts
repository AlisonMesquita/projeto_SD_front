import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias_model';
import { NOTICIAS } from 'src/app/mock-noticias';

@Component({
  selector: 'app-guia-noticias',
  templateUrl: './guia-noticias.component.html',
  styleUrls: ['./guia-noticias.component.scss']
})

export class GuiaNoticiasComponent implements OnInit {
  noticias: Noticias[] = NOTICIAS;
  displayedColumns = ['options', 'descricao', 'titulo', 'dataCriacao', 'usuario', 'categoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
