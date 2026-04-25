// src/types/index.ts
export type EstadoHabitacion = 'libre' | 'ocupada' | 'sucia' | 'mantenimiento';

export interface Habitacion {
  numero: string;
  tipo: string;
  estado: EstadoHabitacion;
  cliente?: string;
  precio: number;
}

export interface Planta {
  piso: number;      // <--- Asegúrate de que esto está aquí
  habitaciones: Habitacion[];
}