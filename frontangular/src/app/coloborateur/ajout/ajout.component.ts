import { Component, OnInit } from '@angular/core';
import { ColaborateurService } from '../colaborateur.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Colaborateur } from '../colaborateur';
import { User } from 'src/app/user/user';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  colaborateur: Colaborateur = {
    id:1,
    adresse: '',
    description: '',
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
    public colaborateurService: ColaborateurService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  saveColaborateur(): void {
    const data = {
      adresse: this.colaborateur.adresse,
      description: this.colaborateur.description,
      name: this.colaborateur.user.name,
      email: this.colaborateur.user.email,
      telephone: this.colaborateur.user.telephone,
      password: this.colaborateur.user.password,
      avatar: this.colaborateur.user.avatar,
    };
 
  this.colaborateurService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.router.navigateByUrl('colaborateur/liste');

  }
  newColaborateur(): void {
    this.submitted = false;
    this.colaborateur = {
      id:1,
      adresse: '',
      description: '',
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
