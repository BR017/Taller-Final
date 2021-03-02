import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/auto`;

@Injectable({
  providedIn: 'root'
})

export class AutoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${baseUrl}/listaAutos`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(params: any) {
    return this.http.put(baseUrl, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  get(id: string) {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
