import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Personel } from './personel';
import { User } from '../user/user';

const baseUrl = 'http://localhost:8000/api/personel';

@Injectable({
  providedIn: 'root'
})

export class PersonelService {
//   private apiURL = "http://localhost:8000/api/personnel/";

   httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json'
   })
 }
constructor(private http: HttpClient) { }

getAll(): Observable<Personel[]> {
 return this.http.get<Personel[]>(baseUrl);
}

get(id: any): Observable<Personel> {
 return this.http.get<Personel>(`${baseUrl}/${id}`);
}
getSearchPersonel(name: string){
  // return this.http.get<Candidat[]>(baseUrl +
  //   `/search_candidat?search_candidat=${name}`);
   const response = new Promise(resolve => {
    this.http.get(baseUrl +
      `/search_personel?search_personel=${name}`)
      .subscribe(data =>{
       resolve(data);
     }, error =>{
       console.log(error);
     });
  });
  return response;
}
getSearchMetier(name: string){
  // return this.http.get<Candidat[]>(baseUrl +
  //   `/search_candidat?search_candidat=${name}`);
   const response = new Promise(resolve => {
    this.http.get(baseUrl +
      `/search_metier?search_metier=${name}`)
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

findByName(name: any): Observable<Personel[]> {
 return this.http.get<Personel[]>(`${baseUrl}?name=${name}`);
}
  }


