import { ContactModel } from './contact.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Component for displaying information about a single contact.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  /**
   * An instance of `ContactModel` to display.
   */
  @Input() contact: ContactModel;
  /**
   * A string, occurrences of which should be highlighted.
   */
  @Input() highlightText: string;
  /**
   * The index of the contact, if displayed in a list.
   */
  @Input() index = 0;
  public showText = true;
  public fadeInText = true;

  constructor() { }

  ngOnInit() {
    if (this.contact.expanded) {
      return;
    }

    this.showText = false;
    this.fadeInText = false;

    setTimeout(() => {
      this.contact.expanded = true;
      setTimeout(() => {
        this.showText = true;
        setTimeout(() => this.fadeInText = true);
      }, 300);
    }, 200 + (100 * this.index));
  }
}
