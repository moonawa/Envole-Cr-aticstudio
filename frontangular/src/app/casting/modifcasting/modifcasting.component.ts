import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Colaborateur } from 'src/app/coloborateur/colaborateur';
import { ColaborateurService } from 'src/app/coloborateur/colaborateur.service';
import { Colaborateur } from 'src/app/coloborateur/colaborateur.model';
import { Casting } from '../casting';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-modifcasting',
  templateUrl: './modifcasting.component.html',
  styleUrls: ['./modifcasting.component.css']
})
export class ModifcastingComponent implements OnInit {

  id!: number;
  casting!: Casting;
  form!: FormGroup;
  colaborateurs: Colaborateur[] = [];
  
  colaborateur: Colaborateur ={
    id: 1,
    adresse_colaborateur: '',
    description_colaborateur: '',
    user: {
      id: 1,
      telephone: '',
      email: '',
      password: '',
      status: '',
      name: '',
      avatar: '',

    }
  }
  constructor(private route: ActivatedRoute,
    private router: Router,
    private castingservice: CastingService,
    private colaborateurService: ColaborateurService) { }

    
  ngOnInit(): void {
    this.colaborateurService.getAll().subscribe((data: Colaborateur[])=>{
      this.colaborateurs = data;
      console.log(this.colaborateurs);

    });
    this.id = this.route.snapshot.params['idCasting'];
    this.castingservice.get(this.id).subscribe((data: Casting)=>{
      this.casting = data;
    }); 

   this.form = new FormGroup({
      datecasting: new FormControl('', [Validators.required]),
      descriptioncasting: new FormControl('', Validators.required),
      namecasting: new FormControl(''),
      colaborateur_id: new FormControl(''),
    });
  }
  get f(){
    return this.form.controls;
  }
    

  submit(){
    console.log(this.form.value);
    this.castingservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Casting updated successfully!');
         alert('Le casting a été modifié avec succès');
         this.router.navigateByUrl('casting/liste');
    })
  }

}
