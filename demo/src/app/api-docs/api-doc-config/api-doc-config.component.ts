/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
// import docs from '../../../../api-docs';
import { ClassDesc, NgApiDoc } from '../api-docs.model';
import { Analytics } from '../analytics/analytics';

const CONFIG_SUFFIX_LENGTH = 'Config'.length;

/**
 * Displays the API docs of a Config service. A Config service for a component Foo is named, by convention,
 * FooConfig, and only has properties, whose name matches with an input of the directive.
 * In order to avoid cluttering the demo pages, the only things displayed by this component
 * is the description of the Config service and the list of its properties, whose documentation and
 * default value is documented in the directive itself.
 */
@Component({
  selector: 'ng-api-doc-config',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-doc-config.component.html'
})
export class NgApiDocConfigComponent {
  public apiDocs: ClassDesc;
  public directiveName: string;
  private _analytics: Analytics;
  private docs: NgApiDoc;

  public constructor(_analytics: Analytics, docs: NgApiDoc) {
    this._analytics = _analytics;
    this.docs = docs;
  }

  @Input()
  public set type(typeName: string) {
    this.apiDocs = this.docs[typeName];
    this.directiveName = typeName.slice(0, -CONFIG_SUFFIX_LENGTH);
  }

  public trackSourceClick(): void {
    this._analytics.trackEvent('Source File View', this.apiDocs.className);
  }
}
