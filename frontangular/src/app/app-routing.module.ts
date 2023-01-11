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
import { CandidatcastinglisteComponent } from './casting/candidatcastingliste/candidatcastingliste.component';
import { FormstepComponent } from './candidat/formstep/formstep.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LogoutComponent } from './login/logout/logout.component';
import { FemmeComponent } from './candidat/femme/femme.component';
import { HommeComponent } from './candidat/homme/homme.component';
import { MajeurComponent } from './candidat/majeur/majeur.component';
import { MineurComponent } from './candidat/mineur/mineur.component';
import { DetailcoloborateurComponent } from './coloborateur/detailcoloborateur/detailcoloborateur.component';
import { AdminComponent } from './dashbord/admin/admin.component';
import { AuthGuard } from './login/auth.guard';
import { CandidatComponent } from './coloborateur/candidat/candidat.component';
import { ColaborateurComponent } from './dashbord/colaborateur/colaborateur.component';
import { DashboardComponent } from './coloborateur/dashboard/dashboard.component';
import { EncoursComponent } from './casting/encours/encours.component';
import { TermineComponent } from './casting/termine/termine.component';



const routes: Routes = [
  //connexion
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: LoginComponent ,},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  //Dashbord Superadmin
  { path: 'dashboard/super', component: SuperadminComponent , canActivate:[AuthGuard]},

   //Dashbord Colaborateur
  { path: 'dashboard/colaborateur', component: ColaborateurComponent , canActivate:[AuthGuard]},
  { path: 'dash/colaborateur', component: DashboardComponent , canActivate:[AuthGuard]},
  { path: 'casting/colaborateur', component: CandidatComponent , canActivate:[AuthGuard]},

  //Dashbord 
  { path: 'dashboard/template', component: TemplateComponent , canActivate:[AuthGuard]},
  { path: 'dashboard/navbar', component: NavbarComponent , canActivate:[AuthGuard]},

  //Candidat CRUD et liaison
  { path: 'candidat/liste', component: ListecandidatComponent ,    canActivate:[AuthGuard]},
  { path: 'candidat/ajout', component: AjoutcandidatComponent , canActivate:[AuthGuard]},
  { path: 'candidat/femme', component: FemmeComponent , canActivate:[AuthGuard]},
  { path: 'candidat/homme', component: HommeComponent , canActivate:[AuthGuard]},
  { path: 'candidat/majeur', component: MajeurComponent , canActivate:[AuthGuard]},
  { path: 'candidat/mineur', component: MineurComponent , canActivate:[AuthGuard]},
  { path: 'candidat/edit/:id', component: ModifcandidatComponent , canActivate:[AuthGuard]},
  { path: 'candidat/formstep', component: FormstepComponent, canActivate:[AuthGuard]},
  { path: 'candidat/casting/:id', component: AjoutcandidatcastingComponent , canActivate:[AuthGuard]},
  { path: 'candidat/:id', component: DetailcandidatComponent , canActivate:[AuthGuard]},

  //Casting CRUD et liaison
  { path: 'casting/liste', component: ListecastingComponent , canActivate:[AuthGuard]},
  { path: 'casting/encours', component: EncoursComponent , canActivate:[AuthGuard]},
  { path: 'casting/termine', component: TermineComponent , canActivate:[AuthGuard]},

  { path: 'casting/ajout', component: AjoutcastingComponent , canActivate:[AuthGuard]},
  { path: 'casting/view/:idCasting', component: DetailcastingComponent , canActivate:[AuthGuard]},
  { path: 'casting/edit/:idCasting', component: ModifcastingComponent , canActivate:[AuthGuard]}, 
  { path: 'casting/candidat', component: CandidatcastingComponent , canActivate:[AuthGuard]}, 
  { path: 'casting/candidat/:idCasting', component: CandidatcastinglisteComponent , canActivate:[AuthGuard]}, 
  { path: 'ajout/casting', component: AjoutcastingseulComponent , canActivate:[AuthGuard]},

 
    //Personel CRUD
    { path: 'personel/liste', component: PersonelComponent , canActivate:[AuthGuard]},
    { path: 'personel/ajout', component: AjoutpersonelComponent , canActivate:[AuthGuard]},
    { path: 'personel/edit/:idPersonel', component: ModifpersonelComponent , canActivate:[AuthGuard]}, 
  
    //Colaborateur CRUD
    { path: 'colaborateur/liste', component: ListeComponent , canActivate:[AuthGuard]},
    { path: 'colaborateur/ajout', component: AjoutComponent , canActivate:[AuthGuard]},
    { path: 'colaborateur/edit/:idColaborateur', component: ModifcolaborateurComponent } ,
    { path: 'colaborateur/:idColoborateur', component: DetailcoloborateurComponent , canActivate:[AuthGuard]},
  //  { path: 'colaborateur/candidat/:idColoborateur', component: CandidatComponent , canActivate:[AuthGuard]},
    

     //Fournisseur CRUD
     { 
      path: 'fournisseur/liste', component: ListefournisseurComponent , canActivate:[AuthGuard]},
     { path: 'fournisseur/ajout', component: AjoutfournisseurComponent , canActivate:[AuthGuard]},
     { path: 'fournisseur/edit/:idFournisseur', component: ModiffournisseurComponent , canActivate:[AuthGuard]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
