import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [{
    path: '',
    component: ContactListComponent,
    data: {key: 'contacts'}
}, {
    path: ':contactId',
    component: ContactDetailComponent
}];

/**
 * Routing module for the Contacts feature module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
