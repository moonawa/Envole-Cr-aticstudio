import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UserComponent } from './user/user/user.component';
import { ListefournisseurComponent } from './fournisseur/listefournisseur/listefournisseur.component';
import { AjoutfournisseurComponent } from './fournisseur/ajoutfournisseur/ajoutfournisseur.component';
import { ModiffournisseurComponent } from './fournisseur/modiffournisseur/modiffournisseur.component';
import { DetailfournisseurComponent } from './fournisseur/detailfournisseur/detailfournisseur.component';
import { DetailcandidatComponent } from './candidat/detailcandidat/detailcandidat.component';
import { DetailcoloborateurComponent } from './coloborateur/detailcoloborateur/detailcoloborateur.component';
import { DetailpersonelComponent } from './personel/detailpersonel/detailpersonel.component';
import { SuperadminComponent } from './dashbord/superadmin/superadmin.component';
import { TemplateComponent } from './dashbord/template/template.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { ListecastingComponent } from './casting/listecasting/listecasting.component';
import { AjoutcastingComponent } from './casting/ajoutcasting/ajoutcasting.component';
import { ModifcastingComponent } from './casting/modifcasting/modifcasting.component';
import { DetailcastingComponent } from './casting/detailcasting/detailcasting.component';
import { AjoutcandidatcastingComponent } from './candidat/ajoutcandidatcasting/ajoutcandidatcasting.component';
import { ListeselectionComponent } from './selection/listeselection/listeselection.component';
import { AjoutselectionComponent } from './selection/ajoutselection/ajoutselection.component';
import { ModifselectionComponent } from './selection/modifselection/modifselection.component';
import { CandidatcastingComponent } from './casting/candidatcasting/candidatcasting.component';
import { AjoutcastingseulComponent } from './casting/ajoutcastingseul/ajoutcastingseul.component';
import { DetailselectionComponent } from './selection/detailselection/detailselection.component';
import { CandidatcastinglisteComponent } from './casting/candidatcastingliste/candidatcastingliste.component';
import { FormstepComponent } from './candidat/formstep/formstep.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LogoutComponent } from './login/logout/logout.component';
import { FemmeComponent } from './candidat/femme/femme.component';
import { HommeComponent } from './candidat/homme/homme.component';
import { MineurComponent } from './candidat/mineur/mineur.component';
import { MajeurComponent } from './candidat/majeur/majeur.component';
import { PivotComponent } from './pivot/pivot/pivot.component';
import { AdminComponent } from './dashbord/admin/admin.component';
import { ColaborateurComponent } from './dashbord/colaborateur/colaborateur.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonelComponent,
    AjoutpersonelComponent,
    ModifpersonelComponent,
    ListeComponent,
    AjoutComponent,
    ModifcolaborateurComponent,
    ListecandidatComponent,
    AjoutcandidatComponent,
    ModifcandidatComponent,
    LoginComponent,
    UserComponent,
    ListefournisseurComponent,
    AjoutfournisseurComponent,
    ModiffournisseurComponent,
    DetailfournisseurComponent,
    DetailcandidatComponent,
    DetailcoloborateurComponent,
    DetailpersonelComponent,
    SuperadminComponent,
    TemplateComponent,
    NavbarComponent,
    ListecastingComponent,
    AjoutcastingComponent,
    ModifcastingComponent,
    DetailcastingComponent,
    AjoutcandidatcastingComponent,
    ListeselectionComponent,
    AjoutselectionComponent,
    ModifselectionComponent,
    CandidatcastingComponent,
    AjoutcastingseulComponent,
    DetailselectionComponent,
    CandidatcastinglisteComponent,
    FormstepComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LogoutComponent,
    FemmeComponent,
    HommeComponent,
    MineurComponent,
    MajeurComponent,
    PivotComponent,
    AdminComponent,
    ColaborateurComponent,

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
