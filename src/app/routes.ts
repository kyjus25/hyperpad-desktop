import {Routes} from '@angular/router';
import {CanvasComponent} from './canvas/canvas.component';
import {LandingComponent} from './landing/landing.component';
import {SessionComponent} from './session/session.component';

export const appRoutes
: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'session', component: SessionComponent},
    {path: 'canvas', redirectTo: 'landing'},
    {path: 'canvas/:id', component: CanvasComponent, children: []},
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: '**', redirectTo: 'landing', pathMatch: 'full'},
];
