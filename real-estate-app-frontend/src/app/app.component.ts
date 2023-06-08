import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="container" style="margin-top: 70px;">
    <app-property-card></app-property-card>
    <app-property-list></app-property-list>
    </div>
  `
})
export class AppComponent {
  // Component logic here
}
