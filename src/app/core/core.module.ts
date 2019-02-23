import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../shared/highlight.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faPhone, faEnvelope, faAngleRight, faTag, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [HighlightPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OrderModule
  ],
  exports: [
    HighlightPipe,
    FontAwesomeModule,
    OrderModule]
})
export class CoreModule {
  constructor() {
    library.add(faMobileAlt, faPhone, faEnvelope, faAngleRight, faTag, faSortAlphaDown, faSortAlphaUp);
  }
 }
