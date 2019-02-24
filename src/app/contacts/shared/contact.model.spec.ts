import { ContactModel } from './contact.model';

/**
 * Tests for `ContactModel`.
 */
describe('ContactModel', () => {
  it('create an instance', () => {
    const model = new ContactModel();
    expect(model).toBeTruthy();
  });
});
