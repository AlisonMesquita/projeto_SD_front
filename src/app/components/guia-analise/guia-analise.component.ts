import { Component, OnInit } from '@angular/core';
import { Analise } from 'src/app/interfaces/analise_model';
//import { ANALISES } from 'src/app/mock-analise';
import { AnaliseService } from 'src/app/services/analise.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-guia-analise',
  templateUrl: './guia-analise.component.html',
  styleUrls: ['./guia-analise.component.scss']
})
export class GuiaAnaliseComponent implements OnInit {
  displayedColumns = ['quantidade', 'bairro', 'categoria', 'tipo'];
  data = new MatTableDataSource<Analise>();
  responseData: any;

  constructor(private analiseService: AnaliseService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.analiseService.getData().then(data => {
      this.responseData = data;
      this.data = this.responseData.response;
      console.log(this.data);
    })
  }

}
