import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
    items = [
      { icon: 'fas fa-home', text: 'Principal', route: '' },
      { icon: 'fa-solid fa-head-side-virus fa-beat', text: 'Proyectos', route:"/proyectos" },
      { icon: 'fa-solid fa-building-shield', text: 'Miembros', route:"/miembros" },
      { icon: 'fa-solid fa-handshake', text: 'Convenios', route:"/convenios" },
      { icon: 'fa-solid fa-people-group', text: 'Quienes Somos', route:"/quienes" }
    ];
  
    activeIndex: number = 0;

    constructor(private router: Router) {}
  
    setActive(index: number): void {
      this.activeIndex = index;
    }
}
