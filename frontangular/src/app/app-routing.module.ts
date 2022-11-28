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
import { SuperadminComponent } from './dashbord/superadmin/superadmin.component';
import { TemplateComponent } from './dashbord/template/template.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { ListecastingComponent } from './casting/listecasting/listecasting.component';
import { AjoutcastingComponent } from './casting/ajoutcasting/ajoutcasting.component';
import { ModifcastingComponent } from './casting/modifcasting/modifcasting.component';
import { DetailcastingComponent } from './casting/detailcasting/detailcasting.component';
import { AjoutcandidatcastingComponent } from './candidat/ajoutcandidatcasting/ajoutcandidatcasting.component';
import { CandidatcastingComponent } from './casting/candidatcasting/candidatcasting.component';
import { AjoutcastingseulComponent } from './casting/ajoutcastingseul/ajoutcastingseul.component';
import { ListeselectionComponent } from './selection/listeselection/listeselection.component';
import { AjoutselectionComponent } from './selection/ajoutselection/ajoutselection.component';
import { ModifselectionComponent } from './selection/modifselection/modifselection.component';
import { DetailselectionComponent } from './selection/detailselection/detailselection.component';
import { CandidatcastinglisteComponent } from './casting/candidatcastingliste/candidatcastingliste.component';
import { FormstepComponent } from './candidat/formstep/formstep.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LogoutComponent } from './login/logout/logout.component';
import { FemmeComponent } from './candidat/femme/femme.component';
import { HommeComponent } from './candidat/homme/homme.component';
import { MajeurComponent } from './candidat/majeur/majeur.component';
import { MineurComponent } from './candidat/mineur/mineur.component';



const routes: Routes = [
  //connexion
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  //Dashbord Superadmin
  { path: 'dashboard/super', component: SuperadminComponent },
    
  //Dashbord 
  { path: 'dashboard/template', component: TemplateComponent },
  { path: 'dashboard/navbar', component: NavbarComponent },

  //Candidat CRUD et liaison
  { path: 'candidat/liste', component: ListecandidatComponent },
  { path: 'candidat/ajout', component: AjoutcandidatComponent },
  { path: 'candidat/femme', component: FemmeComponent },
  { path: 'candidat/homme', component: HommeComponent },
  { path: 'candidat/majeur', component: MajeurComponent },
  { path: 'candidat/mineur', component: MineurComponent },
  { path: 'candidat/edit/:id', component: ModifcandidatComponent },
  { path: 'candidat/formstep', component: FormstepComponent},
  { path: 'candidat/casting/:id', component: AjoutcandidatcastingComponent },
  { path: 'candidat/:id', component: DetailcandidatComponent },

  //Casting CRUD et liaison
  { path: 'casting/liste', component: ListecastingComponent },
  { path: 'casting/ajout', component: AjoutcastingComponent },
  { path: 'casting/view/:idCasting', component: DetailcastingComponent },
  { path: 'casting/edit/:idCasting', component: ModifcastingComponent }, 
  { path: 'casting/candidat', component: CandidatcastingComponent }, 
  { path: 'casting/candidat/:idCasting', component: CandidatcastinglisteComponent }, 
  { path: 'ajout/casting', component: AjoutcastingseulComponent },

  //Selection CRUD et liaison
  { path: 'selection/liste', component: ListeselectionComponent },
  { path: 'selection/ajout', component: AjoutselectionComponent },
  { path: 'selection/view/:id', component: DetailselectionComponent },
  { path: 'selection/edit/:id', component: ModifselectionComponent }, 
  //{ path: 'selection/candidat', component: CandidatcastingComponent }, 

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
