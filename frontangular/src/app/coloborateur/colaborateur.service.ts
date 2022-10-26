import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Colaborateur } from './colaborateur';
const baseUrl = 'http://localhost:8000/api/colaborateur';

@Injectable({
  providedIn: 'root'
})
export class ColaborateurService {

 constructor(private http: HttpClient) { }

 getAll(): Observable<Colaborateur[]> {
  return this.http.get<Colaborateur[]>(baseUrl);
}

get(id: any): Observable<Colaborateur> {
  return this.http.get<Colaborateur>(`${baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
}

update(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data);
}

delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}

deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
}

findByName(name: any): Observable<Colaborateur[]> {
  return this.http.get<Colaborateur[]>(`${baseUrl}?name=${name}`);
}
   }


