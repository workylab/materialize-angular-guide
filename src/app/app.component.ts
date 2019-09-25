import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd && !route.url.includes('#')) {
        window.scrollTo(0, 0);
      }
    });
  }
}
