import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  navbg: any;
  @HostListener('document: scroll') scrollover() {
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      this.navbg = {
        'background-color': '#000000'
      }
    } else {
      this.navbg = {}
    }
  }
}
