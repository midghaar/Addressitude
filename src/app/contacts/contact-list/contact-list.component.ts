import { ContactService } from './../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../shared/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  private contacts$: Observable<Array<ContactModel>>;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts$ = this.contactService.getContacts();
  }
}
