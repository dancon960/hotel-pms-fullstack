// src/types/index.ts

// Definimos los estados posibles
export type EstadoHabitacion = 'libre' | 'ocupada' | 'sucia' | 'mantenimiento';

// Definimos la interfaz de la habitación
export interface Habitacion {
  numero: string;
  tipo: string;
  estado: EstadoHabitacion;
  cliente?: string;
}