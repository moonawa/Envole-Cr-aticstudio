import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Selection } from './selection';
import { catchError } from 'rxjs/operators';


const baseUrl = 'http://localhost:8000/api/selection';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private http: HttpClient) { }

  getAllb(): Observable<Selection[]> {
   return this.http.get<Selection[]>(baseUrl);
 }
 getAll(): Observable<any> {
  return this.http.get(baseUrl)
  .pipe(
    catchError(this.errorHandler)
  )
  }
 
 get(id: any): Observable<Selection> {
   return this.http.get<Selection>(`${baseUrl}/${id}`);
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
 
 findByName(name: any): Observable<Selection[]> {
   return this.http.get<Selection[]>(`${baseUrl}?name=${name}`);
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
 
 
 
