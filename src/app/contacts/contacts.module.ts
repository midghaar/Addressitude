import { ContactService } from './shared/contact.service';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
  ],
  providers: [ContactService]
})
export class ContactsModule { }
