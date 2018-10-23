import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public display = false;
  public sessionID = null;

  constructor() {}

  ngOnInit() {}

  public toggleModal() {
    this.display = true;
  }

  public joinSession() {
    console.log('sessionID is: ', this.sessionID);
  }

}
