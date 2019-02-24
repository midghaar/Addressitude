import { ContactService } from './contact.service';
import { TestBed } from '@angular/core/testing';

/**
 * Tests for `TestService`.
 */
describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
