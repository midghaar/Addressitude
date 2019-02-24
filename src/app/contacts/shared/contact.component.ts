import { ContactModel } from './contact.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Component for displaying information about a single contact.
 * @param contact An instance of `ContactModel` to display.
 * @param highLightText A string, occurrences of which should be highlighted.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  @Input() contact: ContactModel;
  @Input() highlightText: string;

  constructor() { }

  ngOnInit() {
  }

}
