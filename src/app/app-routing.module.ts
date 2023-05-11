import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // all-component : path : http://localhost:4200/
  {
    path:'', component:AllContactsComponent
  },
  // add-contacts : path - http://localhost:4200/add-contact
  {
    path:'add-contact', component:AddContactsComponent
  },
  // view-contacts : path - http://localhost:4200/view-contact/id
  {
    path:'view-contact/:id', component:ViewContactsComponent
  },
  // edit-contacts : path - http://localhost:4200/edit-contact/id
  {
    path:'edit-contact/:id', component:EditContactsComponent
  },
  // page not found
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
