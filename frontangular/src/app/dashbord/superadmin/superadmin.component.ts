import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/candidat/candidat.model';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { Casting } from 'src/app/casting/casting.model';
import { CastingService } from 'src/app/casting/casting.service';
import {ColoborateurService } from 'src/app/coloborateur/colaborateur.service';
import { Coloborateur } from 'src/app/coloborateur/coloborateur.model';
import { Fournisseur } from 'src/app/fournisseur/fournisseur';
import { FournisseurService } from 'src/app/fournisseur/fournisseur.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

 candidats: Candidat[] = [];
 colaborateurs: Coloborateur[] = [];
 femmes : Candidat[] = [];
 hommes : Candidat[] = [];
 mineur : Candidat[] = [];
 majeur : Candidat[] = [];
 castings: Casting[] = [];
 fournisseurs: Fournisseur[] = [];



  constructor(private http: HttpClient,
    private candidatService: CandidatService,
    private colaborateurService: ColoborateurService,
    private castingService: CastingService,
    private fournisseurService: FournisseurService,
    ){}

  ngOnInit(): void {
    // const user:any = localStorage.getItem('user');
    // const userObj = JSON.parse(user);

    // const token = userObj.token;
    // //console.log(userObj.token);

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    // });
    // this.http.get('http://localhost:8000/api/candidats', {headers: headers}).
    // subscribe((res)=>{
    //   console.log(res)
    // },
    // (err)=>{
    //   console.log(err);
    // });
    //tous les candidats
    this.candidatService.getAll().
    subscribe((data: Candidat[])=>{
      this.candidats = data;
      //console.log(this.candidats);
    });
    //tous les candidats femmes
    this.candidatService.candidatFemme().
    subscribe((data: Candidat[])=>{
      this.femmes = data;
      //console.log(this.femmes);
    });
    //tous les candidats hommes
    this.candidatService.candidatHomme().
    subscribe((data: Candidat[])=>{
      this.hommes = data;
      //console.log(this.hommes);
    });
    //tous les candidats mineur
    this.candidatService.mineur().
    subscribe((data: Candidat[])=>{
      this.mineur = data;
     // console.log(this.mineur);
    });
    //tous les candidats majeur
    this.candidatService.majeur().
    subscribe((data: Candidat[])=>{
      this.majeur = data;
      //console.log(this.majeur);
    });

    this.colaborateurService.getAll().
    subscribe((data: Coloborateur[])=>{
      this.colaborateurs = data;
      //console.log(this.colaborateurs);
    });

    this.castingService.getAll().
    subscribe((data: Casting[])=>{
      this.castings = data;
     // console.log(this.castings);
    });

    this.fournisseurService.getAll().
    subscribe((data: Fournisseur[])=>{
      this.fournisseurs = data;
      //console.log(this.fournisseurs);
    });
  }

  get countAllCandiddat(): number {
    return this.candidats['length'];
  }
  get countAllCandiddatFemme(): number {
    return this.femmes['length'];
  }
  get countAllCandiddatHomme(): number {
    return this.hommes['length'];
  }
  get countAllCandiddatmineur(): number {
    return this.mineur['length'];
  }
  get countAllCandiddatmajeur(): number {
    return this.majeur['length'];
  }

  get countAllColaborateur(): number {
    return this.colaborateurs['length'];
  }

  get countAllCasting(): number {
    return this.castings['length'];
  }

  get countAllFournisseur(): number {
    return this.fournisseurs['length'];
  }
}
