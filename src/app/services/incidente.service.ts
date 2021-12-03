import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IncidenteService {
  url = "http://localhost:3000"

  constructor(private client: HttpClient) { }

  updateIncidenteId(parecer: string, status: string, id: number, data: any) {
    const url = this.url + '/comunique/' + id + '/' + parecer + '/' + status;
    console.log(url)

    return this.client.put(url, data).toPromise();
    // return this.client.put(url, data, {
    //   headers:new HttpHeaders()
    //   .set('Content-Type','application/json')
    //   }).toPromise();
  }
  
  getAllIncidentes() {
    const url = this.url + '/comunique'
    return this.client.get(url).toPromise(); 
  }

  getIncidenteById(id: number) {
    const url = this.url + '/comunique/' + id;
    return this.client.get(url).toPromise(); 
  }

  deleteIncidenteById(id: number) {
    const url = this.url + '/comunique/' + id;
    return this.client.delete(url).toPromise();
  }
}
