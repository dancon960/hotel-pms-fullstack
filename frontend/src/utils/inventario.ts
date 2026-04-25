// src/utils/inventario.ts
import type { Planta } from '../types/index'; 

export const HOTEL_DATA: Planta[] = [
  {
    piso: 1,
    habitaciones: [
      { numero: '101', tipo: 'DBL', estado: 'libre', precio: 85 },
      { numero: '102', tipo: 'SUI', estado: 'ocupada', cliente: 'García, Daniel', precio: 150 },
      { numero: '103', tipo: 'IND', estado: 'sucia', precio: 60 },
      { numero: '104', tipo: 'DBL', estado: 'libre', precio: 85 },
    ]
  },
  {
    piso: 2,
    habitaciones: [
      { numero: '201', tipo: 'DBL', estado: 'mantenimiento', precio: 85 },
      { numero: '202', tipo: 'DBL', estado: 'sucia', precio: 85 },
      { numero: '203', tipo: 'SUI', estado: 'libre', precio: 150 },
      { numero: '204', tipo: 'IND', estado: 'ocupada', cliente: 'Martínez, Ana', precio: 60 },
    ]
  }
];