import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-main></app-main>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'SmartHomeAngular';

  constructor() {
  }
}
