import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  titulo = 'Práctica de despliegues';
  bienvenida = 'Bienvenido a la aplicación de gestión de entornos.';
  entorno = 'PROD';
  mensaje = 'Entorno de producción';
  clase = 'prod';
}