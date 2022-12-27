import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from './fournisseur';


const baseUrl = 'https://api.senegopt.com/api/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(baseUrl);
  }

  get(id: any): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${baseUrl}/${id}`);
  }
  getSearchFournisseurName(name: string){
    // return this.http.get<Candidat[]>(baseUrl +
    //   `/search_candidat?search_candidat=${name}`);
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_fourname?search_fourname=${name}`)
        .subscribe(data =>{
         resolve(data);
       }, error =>{
         console.log(error);
       });
    });
    return response;
  }
  getSearchFournisseurPays(name: string){
    // return this.http.get<Candidat[]>(baseUrl +
    //   `/search_candidat?search_candidat=${name}`);
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_pays?search_pays=${name}`)
        .subscribe(data =>{
         resolve(data);
       }, error =>{
         console.log(error);
       });
    });
    return response;
  }
  getSearchFournisseurRegion(name: string){
    // return this.http.get<Candidat[]>(baseUrl +
    //   `/search_candidat?search_candidat=${name}`);
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_region?search_region=${name}`)
        .subscribe(data =>{
         resolve(data);
       }, error =>{
         console.log(error);
       });
    });
    return response;
  }
  getSearchFournisseurPrestation(name: string){
    // return this.http.get<Candidat[]>(baseUrl +
    //   `/search_candidat?search_candidat=${name}`);
     const response = new Promise(resolve => {
      this.http.get(baseUrl +
        `/search_prestation?search_prestation=${name}`)
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
}
