import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lemoncode-master-angular';

  clickListener() {
    console.log('click en boton');
  }

  searchListener(event) {
    console.log('click en lupa', event);
  }
}
