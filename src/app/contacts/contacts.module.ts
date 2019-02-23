import { CoreModule } from './../core/core.module';
import { ContactService } from './shared/contact.service';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactComponent } from './shared/contact.component';
import { ContactSearchPipe } from './shared/contact-search.pipe';

/**
 * Feature module for Contacts. Contains all contact related components, models and services.
 * Allows for lazy loading of contact section.
 */
@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent, ContactComponent, ContactSearchPipe],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [ContactService]
})
export class ContactsModule { }
