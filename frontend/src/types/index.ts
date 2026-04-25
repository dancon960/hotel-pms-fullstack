// src/types/index.ts
export type EstadoHabitacion = 'libre' | 'ocupada' | 'sucia' | 'mantenimiento';

export interface Habitacion {
  numero: string;
  tipo: string;
  estado: EstadoHabitacion;
  cliente?: string;
  precio: number; // Añadimos precio para que parezca más real
}

export interface Planta {
  piso: number;
  habitaciones: Habitacion[];
}