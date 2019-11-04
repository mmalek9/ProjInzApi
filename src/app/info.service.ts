import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  get() {
    return this.http.get(this.baseUrl + '/api/getInfo');
  }

  post(data) {
    return this.http.post(this.baseUrl + '/api/SaveInfo', data);
  }

  update(data) {
    return this.http.post(this.baseUrl + '/api/UpdateInfo', data);
  }

  delete(id) {
    return this.http.post(this.baseUrl + '/api/DeleteInfo', id);
  }
}
