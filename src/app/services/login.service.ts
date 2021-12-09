import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000"

  constructor(private client: HttpClient) { }

  login(email: string, senha: string, data: any) {
    const url = this.url + '/usuario_sistema/' + email + '/' + senha;
    console.log(url)

    return this.client.get(url, data).toPromise().then((result: any) => {
      return result
    }).catch((err: any) => {
      console.log(err);
      return null
    });;
  }
  
  // getAllIncidentes() {
  //   const url = this.url + '/usuario_sistema'
  //   return this.client.get(url).toPromise(); 
  // }

  // getIncidenteById(id: number) {
  //   const url = this.url + '/usuario_sistema/' + id;
  //   return this.client.get(url).toPromise(); 
  // }

  // deleteIncidenteById(id: number) {
  //   const url = this.url + '/usuario_sistema/' + id;
  //   return this.client.delete(url).toPromise();
  // }
}
