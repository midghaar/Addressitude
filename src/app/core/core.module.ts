import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../shared/highlight.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faPhone, faEnvelope, faAngleRight, faAngleLeft,
  faTag, faSortAlphaDown, faSortAlphaUp, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Core module that should be imported into all other modules.
 * Supplies common functionality to sub modules.
 */
@NgModule({
  declarations: [HighlightPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    OrderModule,
    NgxUiLoaderModule
  ],
  exports: [
    HighlightPipe,
    FontAwesomeModule,
    OrderModule,
    NgxUiLoaderModule]
})
export class CoreModule {
  constructor() {
    library.add(faMobileAlt, faPhone, faEnvelope, faAngleRight, faAngleLeft,
      faTag, faSortAlphaDown, faSortAlphaUp, faMapMarkerAlt, faQuestionCircle);
  }
 }
