import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeListEntrepriseComponent } from './employe-list-entreprise/employe-list-entreprise.component';
import { EntrepriseComponent } from './entreprise.component';


const routes: Routes = [
{ path: '',
  component:EntrepriseComponent 
},

{
  path: 'Employee/:id',
  component: EmployeListEntrepriseComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
