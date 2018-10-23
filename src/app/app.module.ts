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
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {CanvasComponent} from './canvas/canvas.component';
import {LandingComponent} from './landing/landing.component';
import {SessionComponent} from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    LandingComponent,
    SessionComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
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
