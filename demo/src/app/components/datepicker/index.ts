import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared';
import { DatepickerDemoComponent } from './demos/datepicker-demo.component';
import { DatepickerSectionComponent } from './datepicker-section.component';
import { DatepickerModule } from 'ng2-bootstrap';

@NgModule({
  declarations:[
    DatepickerDemoComponent,
    DatepickerSectionComponent
  ],
  imports:[
    DatepickerModule.forRoot(),
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [DatepickerSectionComponent]
})
export class DemoDatepickerModule {
}
