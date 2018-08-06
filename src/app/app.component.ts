import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMenu = false;
  constructor(updates: SwUpdate, private router: Router) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  toggle() {
    this.showMenu = !this.showMenu;
  }
}
