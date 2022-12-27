import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn!: boolean;
  user: any;
  checkbox:boolean = false;
    constructor(
      public router: Router,
      public auth: LoginService
    ) { }
  
    ngOnInit(): void {
      this.auth.status().subscribe((res)=>{
        console.log(res);
      })
      this.auth.user().subscribe((res)=>{
        this.user = res;
        this.isSignedIn = true;
      }, (err) =>{
        console.log(err);
      });
    }
  
    logout(){
      // console.log(this.checkbox);
      this.auth.logout(this.checkbox).subscribe((res)=>{
        console.log(res);
        localStorage.removeItem('user');
  
        this.auth.toggleLogin(false);
        // Redirect
        this.router.navigate(['']);
      }, (err) =>{
        console.log(err)
      })
    }
  

}
