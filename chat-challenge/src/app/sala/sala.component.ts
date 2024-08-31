import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/Usuario';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent 
  implements OnInit
{
  usuarios: Usuario[] = [];
  mensajes: string [] = [];
  ngOnInit(): void {
    this.usuarios = [
      {
        name: 'Pepe'
      },
      {
        name: 'Maria'
      }
    ]
  }

  onMensaje(mensaje: string){
    this.mensajes.push(mensaje);
  }
}
