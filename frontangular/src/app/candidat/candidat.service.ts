import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpEvent, HttpRequest} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Candidat } from './candidat.model';
import { User } from '../user/user.model';
const baseUrl = 'https://api.senegopt.com/api/candidats';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     // Authorization: `Bearer ${token}`
    })
    
 }

  constructor(private http: HttpClient) { }
  getCandidatss(page: number){
    return this.http.get(baseUrl + '?page=' + page);
  }
  getAll(): Observable<Candidat[]> {
    
    return this.http.get<Candidat[]>(baseUrl+`/indexcount`)
    
  }

  getSearchCandidat(name: string){
    // return this.http.get<Candidat[]>(baseUrl +
    //   `/search_candidat?search_candidat=${name}`);
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_candidat?search_candidat=${name}`)
        .subscribe(data =>{
         resolve(data);
       }, error =>{
         console.log(error);
       });
    });
    return response;
  }
  getSearchCandidatName(name: string){
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_name?search_name=${name}`)
        .subscribe(data =>{
         resolve(data);
       }, error =>{
         console.log(error);
       });
    });
    return response;
  }
  getSearchCandidatAge(name: string){
    const response = new Promise(resolve => {
     this.http.get(baseUrl +
       `/search_age?search_age=${name}`)
       .subscribe(data =>{
        resolve(data);
      }, error =>{
        console.log(error);
      });
   });
   return response;
 }
 getSearchCandidatTeint(name: string){
  const response = new Promise(resolve => {
   this.http.get(baseUrl +
     `/search_teint?search_teint=${name}`)
     .subscribe(data =>{
      resolve(data);
    }, error =>{
      console.log(error);
    });
 });
 return response;
}
getSearchCandidatSexe(name: string){
  const response = new Promise(resolve => {
   this.http.get(baseUrl +
     `/search_sexe?search_sexe=${name}`)
     .subscribe(data =>{
      resolve(data);
    }, error =>{
      console.log(error);
    });
 });
 return response;
}

  get(id: any): Observable<Candidat> {
    return this.http.get<Candidat>(`${baseUrl}/${id}`);
  }
  getCasting(id: any): Observable<Candidat> {
    return this.http.get<Candidat>(`${baseUrl}/casting/${id}`);
  }
  casting(data: any): Observable<any> {
    return this.http.post(baseUrl +`/casting_candidat`, data);
  }

  candidatFemme(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(baseUrl+`/candidatFemme`);
  }
  candidatHomme(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(baseUrl+`/candidatHomme`);
  }

  mineur(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(baseUrl+`/mineur`);
  }
  majeur(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(baseUrl+`/majeur`);
  }

  // candidatFemme() {
  //   return this.http.get(`${baseUrl}/candidatFemme`);
  // }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${baseUrl}/files`);
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
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
