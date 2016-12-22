import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared';

import { CarouselDemoComponent } from './demos/carousel-demo.component';
import { CarouselSectionComponent } from './carousel-section.component';
import { CarouselModule } from 'ng2-bootstrap';

@NgModule({
  declarations:[
    CarouselDemoComponent,
    CarouselSectionComponent
  ],
  imports:[
    CarouselModule.forRoot(),
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [CarouselSectionComponent]
})
export class DemoCarouselModule {
}
