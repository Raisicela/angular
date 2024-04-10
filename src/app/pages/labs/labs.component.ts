import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Raisa')
  age = 31
  disabled = 'true'
  img = 'https://w3schools.com/howto/img_avatar.png';
  person = signal({
    name: 'Raisa',
    age: 3,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

  clickHandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    this.person.set({...this.person(),age:parseInt(input.value)})
    console.log(input.value)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    console.log(input.value)
  }
  changeAge(event: Event) {
    const input = event.target as HTMLInputElement
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(input.value)
      }
    })
    console.log(input.value)
   }
  changeName(event: Event) {
    const inputName = event.target as HTMLInputElement
    this.person.update(prevState => {
      return {
        ...prevState,
        name: inputName.value
      }
    })
    console.log(inputName.value)
   }
}
