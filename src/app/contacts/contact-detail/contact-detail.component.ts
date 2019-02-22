import { ContactModel } from './../shared/contact.model';
import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContactService } from '../shared/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  private contact$: Observable<ContactModel>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit() {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.contactService.getContact(params.get('contactId'))
      )
    );
  }

}
