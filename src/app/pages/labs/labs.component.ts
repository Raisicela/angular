import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ];
  name = 'Raisa'
  age = 31
  disabled = 'true'
  img = 'https://w3schools.com/howto/img_avatar.png';
  person = {
    name: 'Raisa',
    age: 31,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
}
