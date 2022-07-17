import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichLettreComponent } from './affich-lettre/affich-lettre.component';
import { DemandeEtudiantComponent } from './demande-etudiant/demande-etudiant.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EtudianteComponent } from './etudiante/etudiante.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { LoginComponent } from './login/login.component';
import { NewEtudiantComponent } from './new-etudiant/new-etudiant.component';
import { RechercherNumeComponent } from './rechercher-nume/rechercher-nume.component';



const routes: Routes = [
  {path: "etudiants", component : EtudiantsComponent},
  {path: "rechercherNume", component : RechercherNumeComponent},
  {path: "new-etudiant", component : NewEtudiantComponent},
  {path: "demande-etudiant/:numeroEtud", component : DemandeEtudiantComponent},
  {path: "affich-lettre/:numeroEtud", component : AffichLettreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'etudiante', component: EtudianteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
