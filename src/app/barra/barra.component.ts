import { Component } from '@angular/core';
import { AuxService } from '../services/aux.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  constructor(private AuxService: AuxService) {
    this.AuxService.loadScript();
  }
}
