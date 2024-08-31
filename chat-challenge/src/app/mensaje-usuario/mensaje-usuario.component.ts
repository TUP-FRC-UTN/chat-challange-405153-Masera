import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
 
  mensaje: string = '';
  @Input() name: string = '';
  @Output() mensajeEnviado = new EventEmitter<string>();

  mostrarMensaje(){
    this.mensajeEnviado.emit(this.name+': ' +this.mensaje);
    this.mensaje = '';
  }
}

