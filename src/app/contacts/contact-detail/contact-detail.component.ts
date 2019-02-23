import { ContactModel } from './../shared/contact.model';
import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContactService } from '../shared/contact.service';
import { Observable } from 'rxjs';

/**
 * Component used for display details about a single contact.
 */
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  public contact$: Observable<ContactModel>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit() {
    this.getContact();
  }

  /**
   * Uses route parameter `contactId` to load a single contact and assign the returned
   * `Observable<ContactModel>` to `ContactDetailComponent.contact$`
   */
  getContact() {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.contactService.getContact(params.get('contactId'))
      )
    );
  }
}
