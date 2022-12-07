import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { User } from 'src/app/user/user.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user!: User;
  personalDetails!: FormGroup;
  errors:any = null;
super!: boolean;
  constructor(private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: LoginService,
   ) { }

  ngOnInit(): void {
     this.personalDetails = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
  }

  onSubmit(){

   // const email = form.value.email;
    //const password = form.value.password;

    // console.log(email, password);
    this.auth.signin(this.personalDetails.value).subscribe((res:any)=>{
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      this.super = true;
      // redirect to dashboard
      this.router.navigate(['/dashboard/super']);
      //if(this.user.role === 1){
      //  this.router.navigateByUrl('dashboard/super'); 
      //}
      //else if(this.user.role === 2){
      //  this.router.navigateByUrl('dashboard/colaborateur'); 
      //}
    },
    err=>{
      alert('L\'email ou le mot de passe est incorrect');
      console.log(err);
    })

  }
  // login(): void {
  //   this.loading = true;
  //   this.errors = false;
  //   this.loginservice.login(this.controls.email.value, this.controls.password.value)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.access_token);
  //       this.loading = false;
  //       this.router.navigate(['/']);
  //     }, (err: any) => {
  //       this.loading = false;
  //       this.errors = true;
  //     });
  // }
  // onSubmitt() {
  //   this.loginservice.signin(this.personalDetails.value).subscribe(
  //     (result) => {
  //       console.log(result);

  //       this.responseHandler(result);
  //     },
  //     (error) => {
  //       this.errors = error.error;
  //     },
  //     () => {
  //       this.authState.setAuthState(true);
  //       this.personalDetails.reset();
  //       //if(this.user?.role == 1){
  //         this.router.navigate(['dashboard/super']);
  //      // }
  //       // else if(this.user?.role == 2){
  //       //   this.router.navigate(['dashboard/admin']);
  //       // }
  //       // else if(this.user?.role == 3){
  //       //   this.router.navigate(['dashboard/colaborateur']);
  //       // }
  //     }
  //   );
  // }
  // responseHandler(data:any) {
  //   this.token.handleData(data.access_token);
  // }
  onSubmittt(){
    const formData = new FormData();
      formData.append("email", this.personalDetails.controls['email'].value);
      formData.append("password", this.personalDetails.controls['password'].value);
      const httpOptions = {
          headers: new HttpHeaders({
            'Accept': 'application/json'
          })
        };
        this.http.post('http://localhost:8000/api/login', formData)
        .subscribe(res => {
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res))
          if(this.user?.role === 1){
            this.router.navigateByUrl('dashboard/super'); 
          }
          else if(this.user?.role === 2){
            this.router.navigateByUrl('dashboard/colaborateur'); 
          }
        },
        err => {
          alert('Les identifiants ne sont pas valides!');
        });
        
        //this.router.navigateByUrl('dashboard/super');
  }
}