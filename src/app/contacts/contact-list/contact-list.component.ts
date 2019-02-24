import { ContactService } from './../shared/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../shared/contact.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * Component displaying a list of all contacts with search and sort functionality.
 */
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
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
  /**
   * Fields of `ContactModel` which can be ordered by.
   */
  public orderByFields = [
    'name',
    'email',
    'city'
  ];
  /**
   * The field of `ContactModel` currently being ordered by.
   */
  public orderByField = this.orderByFields[0];
  /**
   * Reverse the ordering.
   */
  public orderByReverse = false;

  constructor(
    private contactService: ContactService) {

    this.searchText$.pipe(
      debounceTime(this.searchTextDebounceTime),
      distinctUntilChanged()).subscribe(s => {
        this.searchText = s;
      });
  }

  ngOnInit() {
    this.getContacts();
  }

  /**
   * Sets a field to order by. If the supplied field is the one currently in use, the order is instead reversed.
   * @param field The name of the field to order by.
   */
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
