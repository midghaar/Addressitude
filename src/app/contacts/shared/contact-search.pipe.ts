import { ContactModel } from './contact.model';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for searching through an array of contacts.
 * Should consider using WebWorker for this if it slows down the ui too much.
 * Ideally this should be done serverside.
 */
@Pipe({
  name: 'contactSearch'
})
export class ContactSearchPipe implements PipeTransform {
  /**
   * The fields of `ContactModel` that should be checked when performing the search.
   */
  private searchFields: Array<string> = [
    'name',
    'email',
    'phone',
    'cell',
    'city',
    'street'
  ];

  transform(value: Array<ContactModel>, args: string): any {
    if (!args) {
      return value;
    }

    const matches = [];

    value.forEach(v => {
      for (const field of this.searchFields) {
        if (v[field].indexOf(args) > -1) {
          matches.push(v);
          break;
        }
      }
    });

    return matches;
  }

}
