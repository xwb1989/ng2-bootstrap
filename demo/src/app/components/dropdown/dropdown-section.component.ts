import { Component } from '@angular/core';

// webpack html imports
let titleDoc = require('html!markdown!./docs/title.md');

let ts = require('!!raw?lang=typescript!./demos/dropdown-demo.component.ts');
let html = require('!!raw?lang=markup!./demos/dropdown-demo.component.html');

@Component({
  selector: 'dropdown-section',
  template: `
<demo-section [name]="name" [src]="src">
  <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included dropdown directives.</p>
  
  <h2>Contents</h2>
  <ul>
    <li><a pageScroll href="#usage">Usage</a></li>
    <li><a pageScroll href="#examples">Examples</a>
      <ul>
        <!--<li><a pageScroll href="#link-color">Link color</a></li>-->
      </ul>
    </li>
    <li><a pageScroll href="#api-reference">API Reference</a>
      <ul>
        <li><a pageScroll href="#dropdown-directive">DropdownDirective</a></li>
        <li><a pageScroll href="#dropdown-toggle-directive">DropdownToggleDirective</a></li>
        <li><a pageScroll href="#dropdown-config">DropdownConfig</a></li>
      </ul>
    </li>
  </ul>
       
  <h2 id="usage">Usage</h2>

  <p [innerHtml]="titleDoc"></p>

  <h2 id="examples">Examples</h2>
      
  <!-- basic -->
  <ng-sample-box [ts]="ts" [html]="html">
    <dropdown-demo></dropdown-demo>
  </ng-sample-box>
      
  <h2 id="api-reference">API Reference</h2>
  <ng-api-doc id="dropdown-directive" directive="DropdownDirective"></ng-api-doc>
  <ng-api-doc id="dropdown-toggle-directive" directive="DropdownToggleDirective"></ng-api-doc>
  <ng-api-doc-config id="dropdown-config" type="DropdownConfig"></ng-api-doc-config>
</demo-section>`
})
export class DropdownSectionComponent {
  public name:string = 'Dropdowns';
  public src:string = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/dropdown';
  public html:string = html;
  public ts:string = ts;
  public titleDoc:string = titleDoc;
}
