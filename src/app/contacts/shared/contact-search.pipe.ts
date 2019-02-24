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

  /**
   * Performs a search in various fields of each item in the supplied array.
   * @param value The `Array` of `ContactModel` to search in.
   * @param args The string to search for.
   */
  transform(value: Array<ContactModel>, args: string): any {
    if (!args) {
      return value;
    }

    const matches = [];
    const regex = new RegExp(args, 'gi');
    value.forEach(v => {
      for (const field of this.searchFields) {
        if (regex.test(v[field])) {
          matches.push(v);
          break;
        }
      }
    });

    return matches;
  }

}
