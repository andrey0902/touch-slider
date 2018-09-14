import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { DragScrollComponent } from './slider/drag-scroll/drag-scroll.component';
import { DragScrollItemDirective } from './slider/drag-scroll-item.directive';
import { DragScrollItemComponent } from './slider/drag-scroll-item/drag-scroll-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    DragScrollComponent,
    DragScrollItemDirective,
    DragScrollItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
