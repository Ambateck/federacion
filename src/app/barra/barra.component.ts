import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  items: Array<{ icon: any; text: string }> = [
    { icon: 'fas fa-home', text: 'Home' },
    { icon: 'fas fa-user', text: 'Profile' },
    { icon: 'fas fa-comment', text: 'Message' },
    { icon: 'fas fa-camera-retro', text: 'Photos' },
    { icon: 'fas fa-cog', text: 'Settings' }
  ];

  activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
