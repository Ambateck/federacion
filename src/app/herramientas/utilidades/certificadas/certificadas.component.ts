import { Component } from '@angular/core';


@Component({
  selector: 'app-certificadas',
  templateUrl: './certificadas.component.html',
  styleUrls: ['./certificadas.component.css']
})


export class CertificadasComponent {
    items: { value: string; checked: boolean }[] = [
    { value: '', checked: false },
    { value: '', checked: false },
    { value: '', checked: false },
    { value: '', checked: false },
    { value: '', checked: false }
  ];
}





