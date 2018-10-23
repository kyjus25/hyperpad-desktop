import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MenuModule,
    ChartModule,
    AutoCompleteModule,
    BrowserModule,
    CardModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
