import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
import { DatepickerConfig } from './datepicker.config';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
                 MonthPickerComponent, YearPickerComponent],
  exports: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
            MonthPickerComponent, YearPickerComponent],
  entryComponents: [DatePickerComponent]
})
export class DatepickerModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: DatepickerModule, providers: [DatepickerConfig]};
  }
}
