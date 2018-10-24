import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public display = false;
  public sessionID = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  public createSession() {
    this.router.navigate(['/canvas/private-' + this.getUniqueId()]);
  }
  // a unique random key generator
  public getUniqueId () {
    return Math.random().toString(36).substr(2, 9)
  }

}
