import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Colaborateur } from './colaborateur.model';
const baseUrl = 'http://localhost:8000/api/colaborateur';

@Injectable({
  providedIn: 'root'
})
export class ColaborateurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private http: HttpClient) { }

 getAll(): Observable<Colaborateur[]> {
  return this.http.get<Colaborateur[]>(baseUrl);
}

get(id: any): Observable<Colaborateur> {
  return this.http.get<Colaborateur>(`${baseUrl}/${id}`);
}
getSearchColaborateur(name: string){
  // return this.http.get<Candidat[]>(baseUrl +
  //   `/search_candidat?search_candidat=${name}`);
   const response = new Promise(resolve => {
    this.http.get(baseUrl +
      `/search_colaborateur?search_colaborateur=${name}`)
      .subscribe(data =>{
       resolve(data);
     }, error =>{
       console.log(error);
     });
  });
  return response;
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


