import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared';
import { ModalModule } from 'ng2-bootstrap';
import { ModalDemoComponent } from './demos/modal-demo.component';
import { ModalSectionComponent } from './modal-section.component';

@NgModule({
  declarations: [
    ModalDemoComponent,
    ModalSectionComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [ModalDemoComponent]
})
export class DemoModalModule {

}
