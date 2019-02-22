import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contact.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {
    private apiUrl = 'https://randomuser.me/api/';
    private seed = 'antonforsberg';
    private results = 20;
    private observable: Observable<Array<ContactModel>>;

    constructor(private httpClient: HttpClient) {
    }

    public getContacts(): Observable<Array<ContactModel>> {
        if (this.observable) {
            return this.observable;
        }

        this.observable = this.httpClient.get(`${this.apiUrl}?seed=${this.seed}&results=${this.results}&noinfo&nat=dk`).pipe(
            map((response: any) => ContactModel.mapModels(response.results))
        );
        return this.observable;
    }

    public getContact(identifier: string): Observable<ContactModel> {
        this.getContacts();

        return new Observable<ContactModel>(subscriber => {
            this.observable.subscribe(contacts => {
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
