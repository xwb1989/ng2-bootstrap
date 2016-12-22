import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared';
import { TabsDemoComponent } from './demos/tabs-demo.component';
import { TabsSectionComponent } from './tabs-section.component';
import { TabsModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    TabsDemoComponent,
    TabsSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  exports: [TabsSectionComponent]
})
export class DemoTabsModule {
}
