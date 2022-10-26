import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelComponent } from './personel/personel/personel.component';
import { AjoutpersonelComponent } from './personel/ajoutpersonel/ajoutpersonel.component';
import { ModifpersonelComponent } from './personel/modifpersonel/modifpersonel.component';
import { ListeComponent } from './coloborateur/liste/liste.component';
import { AjoutComponent } from './coloborateur/ajout/ajout.component';
import { ModifcolaborateurComponent } from './coloborateur/modifcolaborateur/modifcolaborateur.component';
import { ListecandidatComponent } from './candidat/listecandidat/listecandidat.component';
import { AjoutcandidatComponent } from './candidat/ajoutcandidat/ajoutcandidat.component';
import { ModifcandidatComponent } from './candidat/modifcandidat/modifcandidat.component';
import { LoginComponent } from './login/login/login.component';
import { ListefournisseurComponent } from './fournisseur/listefournisseur/listefournisseur.component';
import { AjoutfournisseurComponent } from './fournisseur/ajoutfournisseur/ajoutfournisseur.component';
import { ModiffournisseurComponent } from './fournisseur/modiffournisseur/modiffournisseur.component';
import { DetailfournisseurComponent } from './fournisseur/detailfournisseur/detailfournisseur.component';
import { DetailcandidatComponent } from './candidat/detailcandidat/detailcandidat.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  //Candidat CRUD
  { path: 'candidat/liste', component: ListecandidatComponent },
  { path: 'candidat/ajout', component: AjoutcandidatComponent },
  { path: 'candidat/edit/:idCandidat', component: ModifcandidatComponent }, 
  { path: 'candidat/:id', component: DetailcandidatComponent },


    //Personel CRUD
    { path: 'personel/liste', component: PersonelComponent },
    { path: 'personel/ajout', component: AjoutpersonelComponent },
    { path: 'personel/edit/:idPersonel', component: ModifpersonelComponent }, 
  
    //Colaborateur CRUD
    { path: 'colaborateur/liste', component: ListeComponent },
    { path: 'colaborateur/ajout', component: AjoutComponent },
    { path: 'colaborateur/edit/:idColaborateur', component: ModifcolaborateurComponent } ,

     //Fournisseur CRUD
     { path: 'fournisseur/liste', component: ListefournisseurComponent },
     { path: 'fournisseur/ajout', component: AjoutfournisseurComponent },
     { path: 'fournisseur/edit/:idFournisseur', component: ModiffournisseurComponent } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
