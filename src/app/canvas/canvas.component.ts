import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnDestroy {

  public sessionId = null;
  private script = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadScript('editor.js')
    this.route.params.subscribe(res => {
      this.sessionId = res.id.split(/[- ]+/).pop();
    });
  }


  public loadScript(js) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/js/' + js;
    script.async = true;
    script.defer = true;
    this.script = script;
    body.appendChild(script);
  }

  public destroyScript() {
    this.script.src = "";
  }

  ngOnDestroy() {
    this.destroyScript();
  }

}
