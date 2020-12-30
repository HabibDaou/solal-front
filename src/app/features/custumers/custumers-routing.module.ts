import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampListComponent } from './champ-list/champ-list.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';

import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';



const routes: Routes = [
  {
    path : "" , 
    component : UsersListComponent
  },
  {
    path : "profile" , 
    component : ProfileComponent
  },
  {
    path : "champ/:id" , 
    component : ChampListComponent
  },
  {
    path : "entreprise/:id" , 
    component : EntrepriseListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustumersRoutingModule { }
