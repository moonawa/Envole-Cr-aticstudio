import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formstep',
  templateUrl: './formstep.component.html',
  styleUrls: ['./formstep.component.css']
})
export class FormstepComponent implements OnInit {

  title = 'upload';
  myFiles: any = [];

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private httpclient: HttpClient,
    private router: Router) { }
  ngOnInit(): void  {
        this.personalDetails = this.formBuilder.group({
            prenom: ['', Validators.required],
            nom: ['', Validators.required],
            telephone_candidat: ['',Validators.required],
            email_candidat: '',
            adresse_candidat: ['',Validators.required],
            sexe: ['',Validators.required],
            birthday: ['',Validators.required],
            situation_matrimoniale: '',
            enfant: '',
        });
        this.addressDetails = this.formBuilder.group({
            taille: '',
            poids: '',
            teint: '',
            barbu: '',
            profession :['',Validators.required],
            langues_parlees:'',
            signe_particulier: '',
            longueur_cheveux: '',
            texture_cheveux: '',
            teinture_cheveux: '',
            couleur_yeux: '',
            lentille_yeux: '',
            forme_visage: '',
            percing: '',
            cicatrice: '',
            tatouage: '',
            tache_naissance: '',
            couleur_cheveux: '',
        });
        this.educationalDetails = this.formBuilder.group({
            selection_envole: '',
            quel_cinema: '',

            campagne_publicitaire:'',
            nom_campagne_publicitaire:'',

            role_souhaite:'',
            lequel_role_souhaite:'',

            role_interdit:'',
            lequel_role_interdit:'',

            experience_cinema: 0,
            combien_de_film: '',
            les_films:'',

            experience_theatre: 0,
            combien_annee_theatre:'',
            les_theatres:'',

            figurant:'',
            baiser:'',
            nudite:'',
            
            pourquoi_cinema:'',
            appreciation:'',
            filename: ['', Validators.required],


        });
      }
      get personal() { return this.personalDetails.controls; }
      get address() { return this.addressDetails.controls; }
      get education() { return this.educationalDetails.controls; }
      next(){
        if(this.step==1){
              this.personal_step = true;
              if (this.personalDetails.invalid) { return  }
              this.step++
        }
        if(this.step==2){
            this.address_step = true;
            if (this.addressDetails.invalid) { return }
                this.step++;
        }
      }
      previous(){
        this.step--
        if(this.step==1){
          this.personal_step = false;
        }
        if(this.step==2){
          this.education_step = false;
        }
      }

      onFileChangeb(event:Event) {
        const file = (event.target as HTMLInputElement)?.files?.[0];
        
        this.educationalDetails.patchValue({
          photo1: file
        });
        
      }
      onFileChangebb(event:Event) {
  
        //if (event.target.files.length > 0) {
          //const photo1 = event.target.files[0];
          const photo1 = (event.target as HTMLInputElement)?.files?.[0];
    
          this.educationalDetails.patchValue({
            fileSource: photo1
          //});
        })
      }
      onFileChange(event:any) {
        for (var i = 0; i < event.target.files.length; i++) { 
          this.myFiles.push(event.target.files[i]);
      }
      }
      submit(){
        // if(this.step==3){
        //   this.education_step = true;
        //   if (this.educationalDetails.invalid) { return }
        
        const formData = new FormData();
        
         formData.append("nom", this.personalDetails.controls['nom'].value);
         formData.append("prenom", this.personalDetails.controls['prenom'].value);
         formData.append("email_candidat", this.personalDetails.controls['email_candidat'].value);
         formData.append("adresse_candidat", this.personalDetails.controls['adresse_candidat'].value);
         formData.append("telephone_candidat", this.personalDetails.controls['telephone_candidat'].value);
         formData.append("sexe", this.personalDetails.controls['sexe'].value);
         formData.append("enfant", this.personalDetails.controls['enfant'].value);
         formData.append("birthday", this.personalDetails.controls['birthday'].value);
         formData.append("situation_matrimoniale", this.personalDetails.controls['situation_matrimoniale'].value);
     
         formData.append("taille", this.addressDetails.controls['taille'].value);
         formData.append("poids", this.addressDetails.controls['poids'].value);
         formData.append("teint", this.addressDetails.controls['teint'].value);
         formData.append("barbu", this.addressDetails.controls['barbu'].value);
         formData.append("signe_particulier", this.addressDetails.controls['signe_particulier'].value);
         formData.append("longueur_cheveux", this.addressDetails.controls['longueur_cheveux'].value);
         formData.append("texture_cheveux", this.addressDetails.controls['texture_cheveux'].value);
         formData.append("teinture_cheveux", this.addressDetails.controls['teinture_cheveux'].value);
         formData.append("couleur_yeux", this.addressDetails.controls['couleur_yeux'].value);
         formData.append("lentille_yeux", this.addressDetails.controls['lentille_yeux'].value);
         formData.append("forme_visage", this.addressDetails.controls['forme_visage'].value);
         formData.append("percing", this.addressDetails.controls['percing'].value);
         formData.append("cicatrice", this.addressDetails.controls['cicatrice'].value);
         formData.append("tatouage", this.addressDetails.controls['tatouage'].value);
         formData.append("tache_naissance", this.addressDetails.controls['tache_naissance'].value);
         formData.append("couleur_cheveux", this.addressDetails.controls['couleur_cheveux'].value);
         formData.append("profession", this.addressDetails.controls['profession'].value);
         formData.append("langues_parlees", this.addressDetails.controls['langues_parlees'].value);
         
         formData.append("selection_envole", this.educationalDetails.controls['selection_envole'].value);
         formData.append("quel_cinema", this.educationalDetails.controls['quel_cinema'].value);
         formData.append("experience_cinema", this.educationalDetails.controls['experience_cinema'].value);
         formData.append("combien_de_film", this.educationalDetails.controls['combien_de_film'].value);
         formData.append("les_films", this.educationalDetails.controls['les_films'].value);
         formData.append("experience_theatre", this.educationalDetails.controls['experience_theatre'].value);
         formData.append("combien_annee_theatre", this.educationalDetails.controls['combien_annee_theatre'].value);
         formData.append("les_theatres", this.educationalDetails.controls['les_theatres'].value);
         formData.append("role_interdit", this.educationalDetails.controls['role_interdit'].value);
         formData.append("lequel_role_interdit", this.educationalDetails.controls['lequel_role_interdit'].value);
         formData.append("role_souhaite", this.educationalDetails.controls['role_souhaite'].value);
         formData.append("lequel_role_souhaite", this.educationalDetails.controls['lequel_role_souhaite'].value);
         formData.append("figurant",this.educationalDetails.controls['figurant'].value);
         formData.append("baiser", this.educationalDetails.controls['baiser'].value);
         formData.append("pourquoi_cinema", this.educationalDetails.controls['pourquoi_cinema'].value);
         formData.append("appreciation", this.educationalDetails.controls['appreciation'].value);
         formData.append("campagne_publicitaire", this.educationalDetails.controls['campagne_publicitaire'].value);
         formData.append("nom_campagne_publicitaire", this.educationalDetails.controls['nom_campagne_publicitaire'].value);
         formData.append("nudite", this.educationalDetails.controls['nudite'].value);
         for (var i = 0; i < this.myFiles.length; i++) { 
          formData.append("filename[]", this.myFiles[i]);
        }
     
         const httpOptions = {
           headers: new HttpHeaders({
             'Accept': 'application/json'
           })
         };
       
     
         this.httpclient.post('https://api.senegopt.com/api/candidats/can', formData)
           .subscribe(res => {
             console.log(res);
           });
           alert('Le candidat est créé avec succès!');
     
           this.router.navigateByUrl('candidat/liste');
       }
      //}

}