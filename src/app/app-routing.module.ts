import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contactComponent } from './contact_us/contact.component';
import { homeComponent } from './home/home.component';

import { medecinComponent } from './home/medecin.component';

const routes: Routes = [
  {
  path:'',
  component: homeComponent,
  pathMatch:'full'
  },
  {
  path:'contact',
  component: contactComponent
  },
  {
  path:'medecin',
  component: medecinComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
