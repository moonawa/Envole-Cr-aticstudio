import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  personalDetails!: FormGroup;

  constructor(private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){

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
          this.router.navigateByUrl('dashboard/super'); 
        },
        err => {
          alert('Les identifiants ne sont pas valides!');
        });
        
        //this.router.navigateByUrl('dashboard/super');
  }
}
