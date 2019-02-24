import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  }, {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  }
];

/**
 * The root routing modules. Handles lazy loading of feature modules.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
