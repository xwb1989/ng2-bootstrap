import { Component } from '@angular/core';
import { DEMOS } from './demos/index';

// webpack html imports
let titleDoc = require('html!markdown!./docs/usage.md');

@Component({
  selector: 'alert-section',
  templateUrl: './alerts-section.component.html'
})
export class AlertsSectionComponent {
  public name: string = 'Alerts';
  public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/alert';
  public titleDoc: string = titleDoc;
  public demos: any = DEMOS;
}
