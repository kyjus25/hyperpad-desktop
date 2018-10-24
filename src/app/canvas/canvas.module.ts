import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CanvasComponent } from './canvas.component';

@NgModule({
  declarations: [
    CanvasComponent,
  ],
  imports: [
    AutoCompleteModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [CanvasComponent]
})
export class CanvasModule { }
