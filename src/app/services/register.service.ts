import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/users'

@Injectable({
  providedIn: 'root'
})



export class RegisterService {

  constructor(private http: HttpClient) { } 

    checkLoginDetails(data): Observable<any> {

      console.log('in checkLoginDetails', data)
      console.log(data.username)
      console.log(data.password)
      return this.http.get(`${baseUrl}/logging-in`, {params: data});
    }

    getAll(): Observable<any> {
      return this.http.get(baseUrl);
    }

    get(id): Observable<any> {
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data): Observable<any> {
      console.log(data, 'create data')
      return this.http.post(baseUrl, data);
    }
  
    update(id, data): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
  
    delete(id): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByName(name): Observable<any> {
      console.log(name, 'sending to server')
      return this.http.get(`${baseUrl}?name=${name}`);
    }
   
}