# Todoapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Comando para instalar angular

npm i @angular/cli -g

## Comando para creación de aplicaciones

ng new (nombre se proyecto) --skip-tests

## Comando para despliegue de aplicacion

ng serve

## Comando para generar componentes

ng g component pages/(ruta)

Con el atributo path se indica qué componente se va renderizar en cada ruta

## String Interpolation {{}}

Es una técnica de enlace de datos unidireccional que se utiliza para generar datos de un código TypeScript a una plantilla HTML. Renderizan el html.

### ¿Que más puedes hacer con String Interpolation?

Puedes tener condiciones, como:
{{ isDisabled ? 'Verdadero' : 'Falso' }}
Ejecutar funciones, como {{ saludar() }}
Acceder a propiedades de objetos {{ person.name }}

## Property biding []
