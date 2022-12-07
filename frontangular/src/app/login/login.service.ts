import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // Toogle Loggedin
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  // Status
  status() {
    const localData: any = localStorage.getItem('user');
    if (!localData) {
      this.isLoggedIn.next(false);
       console.log('User not lgged in !!');
    } else {
      const userObj = JSON.parse(localData);
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if (token_expires_at > current_date) {
        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
         console.log('Token Expires!!');
      }
    }
    return this.isLoggedIn.asObservable();
  }

  // Login
  login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/auth/login', {
      email: email,
      password: password,
    });
  }
  signin(user: User): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
    }
  // User Info
  user() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8000/api/user', {
      headers: headers,
    });
  }

  // Logout
  logout(allDevice: boolean){
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('http://localhost:8000/api/auth/logout', {allDevice:allDevice}, {headers:headers});
  }

  // Register
  register(name:string, email:string, password:string, password_confirmation:string){
    const data={
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation,
    }
    return this.http.post('http://localhost:8000/api/auth/register', data);
  }

  // Forgot Pass
  forgot(email:string){
    return this.http.post('http://localhost:8000/api/auth/forgot', {email:email});
  }

  // Reset Pass
  reset(token:string, password:string,password_confirmation:string){

    const data={
      token:token,
      password:password,
      password_confirmation:password_confirmation
    }
    return this.http.post('http://localhost:8000/api/auth/reset', data);
  }
  // authUrl = 'http://localhost:8000/oauth/token';
  // apiUrl = 'http://localhost:8000/api';
  // options: any;

  // constructor(private http: HttpClient
  // ) {
  // }

  //  // Login
  //  signin(user: User): Observable<any> {
  //   return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  // }

  // // Access user profile
  // profileUser(): Observable<any> {
  //   return this.http.get('http://127.0.0.1:8000/api/auth/user');
  //   return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');

  // }

  // login(e: string, p: string) {
  //   return this.http.post(this.authUrl, {
  //     grant_type: 'password',
  //     client_id: '2',
  //     client_secret: 'srKHlpLcnyLaBhZmQsAIuztgY7C0N8gjZPFKjYgu',
  //     username: e,
  //     password: p,
  //     scope: ''
  //   }, this.options);
  // }
  // /**
  //  * Revoke the authenticated user token
  //  */
  // logout() {
  //   this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
  //   return this.http.get(this.apiUrl + '/token/revoke', this.options);
  // }
}
