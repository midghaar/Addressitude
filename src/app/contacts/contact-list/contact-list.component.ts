import { ContactService } from './../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../shared/contact.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, throttleTime, debounce } from 'rxjs/operators';

/**
 * Component displaying a list of all contacts
 */
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  /**
   * Observable array of all contacts.
   */
  public contacts$: Observable<Array<ContactModel>>;
  /**
   * The amount of time (in milliseconds) the value of `ContactListComponent.searchText` should be debounced.
   */
  private searchTextDebounceTime = 300;
  /**
   * Subject used for debouncing `ContactListComponent.searchText`.
   */
  public searchText$ = new Subject<string>();
  /**
   * Search text used for filtering contacts.
   */
  public searchText = '';
  public orderByFields = [
    'name',
    'city'
  ];
  public orderByField = this.orderByFields[0];
  public orderByReverse = false;

  constructor(private contactService: ContactService) {
    this.searchText$.pipe(
      debounceTime(this.searchTextDebounceTime),
      distinctUntilChanged()).subscribe(s => {
        this.searchText = s;
      });
  }

  ngOnInit() {
    this.getContacts();
  }

  orderBy(field: string) {
    if (this.orderByField === field) {
      this.orderByReverse = !this.orderByReverse;
      return;
    }

    this.orderByField = field;
    this.orderByReverse = false;
  }

  /**
   * Initiates fetching of all contacts and assigns the returned `Observable<Array<ContactModel>>` to `ContactListComponent.contacts$`
   */
  getContacts() {
    this.contacts$ = this.contactService.getContacts();
  }
}
