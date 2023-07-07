import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  tarea: Tarea = {
    titulo: '',
    descripcion: '',
    completada: false
  };

  constructor(private tareasService: TareasService) {}

  // Agregar una nueva tarea a la lista al hacer clic en el botón "Agregar tarea"
  agregarTarea() {
    this.tareasService.agregarTarea(this.tarea);
    this.tarea = {
      titulo: '',
      descripcion: '',
      completada: false
    };
  }
}

interface Tarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
}
