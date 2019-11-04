import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  get() {
    return this.http.get(this.baseUrl + '/api/getDeal');
  }

  post(data) {
    return this.http.post(this.baseUrl + '/api/SaveDeal', data);
  }

  update(data) {
    return this.http.post(this.baseUrl + '/api/UpdateDeal', data);
  }

  delete(id) {
    return this.http.post(this.baseUrl + '/api/DeleteDeal', id);
  }
}
