import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from '../alert/alert.component';
import { AlertModule } from '../alert/alert.module';
import { AlertConfig } from '../alert/alert.config';

describe('Component: Alert', () => {
  let fixture:ComponentFixture<TestAlertComponent>;
  let context:any;
  const overTemplate = `
    <div class="alert" role="alert" [ngClass]="classes" *ngIf="!closed">
      <button *ngIf="dismissible" type="button" class="close" (click)="onClose()" (touch)="onClose()">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
      </button>
    </div>
  `;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TestAlertComponent], imports: [AlertModule.forRoot()]});
    TestBed.overrideComponent(TestAlertComponent, {set: {template: overTemplate}});
    fixture = TestBed.createComponent(TestAlertComponent);
    context = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should have a default type alert-warning', () => {
    context.ngOnInit();
    expect(context.type).toEqual(`warning`);
    expect(context.classes[0]).toEqual(`alert-warning`);
  });

  it('should have class dismissible if dismissible=true', () => {
    context.dismissible = true;
    context.ngOnInit();
    expect(context.classes.length).toEqual(2);
    expect(context.classes[1]).toEqual(`alert-dismissible`);
  });

  it('should be dismissed by timeout', (done:() => void) => {
    context.dismissOnTimeout = 1000;
    context
      .onClosed
      .subscribe(() => {
        expect(context.isClosed).toBeTruthy();
        done();
      });
    context.ngOnInit();
  });

  it('should be closed by public method onClose', () => {
    context.ngOnInit();
    expect(context.isClosed).toBeFalsy();
    context.close();
    expect(context.isClosed).toBeTruthy();
  });
});

@Component({
  selector: 'alert-test',
  template: ''
})

class TestAlertComponent extends AlertComponent {
  public constructor(config: AlertConfig) {
    super(config);
  }
}
