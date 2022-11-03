import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selection } from './selection';

const baseUrl = 'http://localhost:8000/api/selection';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Selection[]> {
   return this.http.get<Selection[]>(baseUrl);
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
    }
 
 
 
