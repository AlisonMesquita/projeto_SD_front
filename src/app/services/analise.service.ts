import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AnaliseService {
  url = "http://localhost:3000";

  constructor(private client: HttpClient) { }

  getData() {
    const url = this.url + '/relatorio'
    return this.client.get(url).toPromise(); 
  }
}
