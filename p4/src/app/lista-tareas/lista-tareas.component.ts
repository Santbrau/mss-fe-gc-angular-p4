import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {
    // Obtener las tareas del servicio al inicializar el componente
    this.tareas = tareasService.getTareas();
  }

  // Alternar el estado de completado de una tarea al hacer clic en el botón "Completada"
  toggleCompletada(index: number) {
    const tarea = this.tareas[index];
    tarea.completada = !tarea.completada;
  }

  // Eliminar una tarea de la lista
  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index);
  }
}

interface Tarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
}
