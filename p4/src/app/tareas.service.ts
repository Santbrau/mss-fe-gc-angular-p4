import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TareasService {
    private tareas: Tarea[] = [];

    // Obtener todas las tareas
    getTareas(): Tarea[] {
        return this.tareas;
    }

    // Agregar una nueva tarea a la lista
    agregarTarea(tarea: Tarea) {
        this.tareas.push(tarea);
    }

    // Eliminar una tarea de la lista por su índice
    eliminarTarea(index: number) {
        this.tareas.splice(index, 1);
    }

    // Marcar una tarea como completada
    marcarComoCompletada(index: number) {
        this.tareas[index].completada = true;
    }
}

interface Tarea {
    titulo: string;
    descripcion: string;
    completada: boolean;
}
