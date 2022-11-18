import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Casting } from './casting.model';


@Injectable({
  providedIn: 'root'
})
export class CastingService {
  private apiURL = "http://localhost:8000/api/casting/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAllb(): Observable<any> {
    return this.httpClient.get(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
    }
    getAll(): Observable<Casting[]> {
      return this.httpClient.get<Casting[]>(this.apiURL);
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(casting:Casting): Observable<any> {
    return this.httpClient.post(this.apiURL ,  JSON.stringify(casting), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      )
    }  

    createcasting(casting:Casting): Observable<any> {
      return this.httpClient.post(this.apiURL + 'createcasting/',  JSON.stringify(casting), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
      }  

      getSearchCasting(name: string){
         const response = new Promise(resolve => {
          this.httpClient.get(this.apiURL +
            `search_casting?search_casting=${name}`)
            .subscribe(data =>{
             resolve(data);
           }, error =>{
             console.log(error);
           });
        });
        return response;
      }
      
    /**
     * Write code on Method
     *
     * @return response()
     */
    get(id:number): Observable<any> {  
      return this.httpClient.get(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    getb(id: any): Observable<Casting> {
      return this.httpClient.get<Casting>(this.apiURL+id);
    }
    candidat(id:number): Observable<any> {  
      return this.httpClient.get(this.apiURL + 'candidats/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    candidatb(id: number) {
      return this.httpClient.get<Casting>(this.apiURL + 'candidats/'+ id);
    }
    candidatbb(id: any): Observable<Casting> {
      //return this.httpClient.get<Casting>(`${baseUrl}/${id}`);
      return this.httpClient.get<Casting>(this.apiURL + 'candidats/' + id);
    }
      
    /**
     * Write code on Method
     *
     * @return response()
     */
    update(id:number, casting:Casting): Observable<any> {
      return this.httpClient.put(this.apiURL + id, JSON.stringify(casting), this.httpOptions)
      .pipe( 
        catchError(this.errorHandler)
      )
    }
         
    /**
     * Write code on Method
     *
     * @return response()
     */
    delete(id:number){
      return this.httpClient.delete(this.apiURL + 'castings/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    alloue(data: any): Observable<any> {
      return this.httpClient.post(this.apiURL +`alloue`, data);
    }
    listAlloue(): Observable<any> {
      return this.httpClient.get(this.apiURL + `affiche_alloue`)
      .pipe(
        catchError(this.errorHandler)
      )
      }
     
    /** 
   * Write code on Method
   *
   * @return response()
   */
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
 
 
 
