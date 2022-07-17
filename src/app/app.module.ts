import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { EtudiantsComponent } from './etudiants/etudiants.component';
import { FormsModule } from '@angular/forms';
import { RechercherNumeComponent } from './rechercher-nume/rechercher-nume.component';
import { DemandeEtudiantComponent } from './demande-etudiant/demande-etudiant.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { AffichLettreComponent } from './affich-lettre/affich-lettre.component';
import { LoginComponent } from './login/login.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EtudianteComponent } from './etudiante/etudiante.component';





@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    RechercherNumeComponent,
    DemandeEtudiantComponent,
    NewEtudiantComponent,
    AffichLettreComponent,
    LoginComponent,
    EntrepriseComponent,
    EtudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
