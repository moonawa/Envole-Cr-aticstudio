import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personel } from '../personel';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-ajoutpersonel',
  templateUrl: './ajoutpersonel.component.html',
  styleUrls: ['./ajoutpersonel.component.css']
})
export class AjoutpersonelComponent implements OnInit {
  personel: Personel = {
    id:1,
    metier: '',
    user: {
      id: 1,
      name: '',
      email: '',
      telephone: '',
      //role: 2,
      password: '',
      //status: '',
      avatar: ''

   }
   
  };
 
  submitted = false;
  constructor(
    public personelService: PersonelService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  savepersonel(): void {
    const data = {
      metier: this.personel.metier,
      name: this.personel.user.name,
      email: this.personel.user.email,
      telephone: this.personel.user.telephone,
      password: this.personel.user.password,
      avatar: this.personel.user.avatar,
    };
 
  this.personelService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.router.navigateByUrl('personel/liste');

  }
  newpersonel(): void {
    this.submitted = false;
    this.personel = {
      id:1,
      metier: '',
      user: {
        id: 1,
        name: '',
        email: '',
        telephone: '',
        //role: 2,
        password: '',
        //status: '',
        avatar: ''
  
     }
  };
  }
}

