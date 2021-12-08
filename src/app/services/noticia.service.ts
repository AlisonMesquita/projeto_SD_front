import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  url = "http://localhost:3000"

  constructor(private client: HttpClient) { }

  createNews(descricao: string, titulo: string, usuario: number, categoria: number, data: any) {
    const url = this.url + '/noticia/' + descricao + '/' + titulo + '/string/' + usuario + '/' + categoria;
    return this.client.post(url, data).toPromise();
  }

  updateNews(id: number, descricao: string, titulo: string, categoria_id: number, data: any) {
    const url = this.url + '/noticia/' + id + '/' + descricao + '/' + titulo + '/' + categoria_id;
    return this.client.put(url, data).toPromise();
  }

  deleteNews(id: number) {
    const url = this.url + '/noticia/' + id;
    return this.client.delete(url).toPromise();
  }

  getAllNews() {
    const url = this.url + '/noticia'
    return this.client.get(url).toPromise();
  }
}
