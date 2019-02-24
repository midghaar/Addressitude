import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contact.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

/**
 * Service for handling contact related HTTP requests using `HttpClient`.
 */
@Injectable()
export class ContactService {
    /**
     * Api end point
     */
    private apiUrl = 'https://randomuser.me/api/';
    /**
     * Seed used to ensure validity of contact identifiers in routes
     */
    private seed = 'antonforsberg';
    /**
     * The amount of contacts to load. Hardcoded for demonstration purposes. Should in reality load all, preferably paginated.
     */
    private results = 30;
    /**
     * A cache of fetched contacts to store between routes.
     */
    private cachedContacts: Array<ContactModel>;

    constructor(
        private httpClient: HttpClient,
        private ngxLoaderService: NgxUiLoaderService) {
    }

    /**
     * Gets all contacts.
     * @return an `Observable` of an `Array` of `ContactModel`.
     */
    public getContacts(): Observable<Array<ContactModel>> {
        if (this.cachedContacts) {
            return new Observable<Array<ContactModel>>(subscriber => subscriber.next(this.cachedContacts));
        }

        this.ngxLoaderService.start();
        return this.httpClient.get(`${this.apiUrl}?seed=${this.seed}&results=${this.results}&noinfo&nat=dk`).pipe(
            map((response: any) => {
                this.cachedContacts = ContactModel.mapModels(response.results);
                this.ngxLoaderService.stop();
                return this.cachedContacts;
            })
        );
    }

    /**
     * Gets a contact based on the supplid identifier.
     * @param identifier the identifier of the contact to load.
     * @return an `Observable` of a `ContactModel`.
     */
    public getContact(identifier: string): Observable<ContactModel> {
        return new Observable<ContactModel>(subscriber => {
            this.getContacts().subscribe(contacts => {
                let match = null;

                for (const contact of contacts) {
                    if (contact.identifier === identifier) {
                        match = contact;
                        break;
                    }
                }

                subscriber.next(match);
            });
        });
    }
}
