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

    this.auth.signin(this.personalDetails.value).subscribe((res:any)=>{
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      this.super = true;
      // redirect to dashboard
      if(res.role === "Superadmin" || res.role === "Admin"){
        this.router.navigateByUrl('dashboard/super'); 
      }
     else if(res.role === "Client" ){
       this.router.navigateByUrl('dash/colaborateur'); 
      }
    },
    err=>{
      alert('L\'email ou le mot de passe est incorrect');
      console.log(err);
    })

  }
 
}