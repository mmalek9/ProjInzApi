import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  get() {
    return this.http.get(this.baseUrl + '/api/getContact');
  }

  post(data) {
    return this.http.post(this.baseUrl + '/api/SaveContact', data);
  }

  update(data) {
    return this.http.post(this.baseUrl + '/api/UpdateContact', data);
  }

  delete(id) {
    return this.http.post(this.baseUrl + '/api/DeleteContact', id);
  }
}
