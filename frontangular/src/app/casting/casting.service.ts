import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casting } from './casting';

const baseUrl = 'http://localhost:8000/api/casting';

@Injectable({
  providedIn: 'root'
})
export class CastingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Casting[]> {
   return this.http.get<Casting[]>(baseUrl);
 }
 
 get(id: any): Observable<Casting> {
   return this.http.get<Casting>(`${baseUrl}/${id}`);
 }
 
 create(data: any): Observable<any> {
   return this.http.post(baseUrl, data);
 }
 createcasting(data: any): Observable<any> {
  return this.http.post(baseUrl +`/createcasting`, data);
}
alloue(data: any): Observable<any> {
  return this.http.post(baseUrl +`/alloue`, data);
}
 
 update(id: any, data: any): Observable<any> {
   return this.http.put(`${baseUrl}/${id}`, data);
 }

 castingcandidat(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data);
}

 delete(id: any): Observable<any> {
   return this.http.delete(`${baseUrl}/${id}`);
 }
 
 deleteAll(): Observable<any> {
   return this.http.delete(baseUrl);
 }
 
 findByName(name: any): Observable<Casting[]> {
   return this.http.get<Casting[]>(`${baseUrl}?name=${name}`);
 }
    }
 
 
 
