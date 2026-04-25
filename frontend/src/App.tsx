// src/App.tsx
import { useState } from 'react';
import { TarjetaHabitacion } from './components/TarjetaHabitacion';
import type { Habitacion } from './types/index'; // <--- Forzamos la ruta aquí también

const INICIAL: Habitacion[] = [
  { numero: '101', tipo: 'Doble', estado: 'libre' },
  { numero: '102', tipo: 'Suite', estado: 'ocupada', cliente: 'García, Daniel' },
  { numero: '103', tipo: 'Individual', estado: 'sucia' },
  { numero: '202', tipo: 'Doble', estado: 'sucia' },
];

export default function App() {
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>(INICIAL);

  const manejarAccion = (numero: string) => {
    setHabitaciones(prev => prev.map(hab => 
      (hab.numero === numero && hab.estado === 'sucia') ? { ...hab, estado: 'libre' } : hab
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-slate-900">CloudHotel <span className="text-blue-600">PMS</span></h1>
        <p className="text-slate-500 font-medium italic">Paso 6: Componentes reutilizables con Props tipadas</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {habitaciones.map(hab => (
          <TarjetaHabitacion key={hab.numero} hab={hab} alClic={manejarAccion} />
        ))}
      </div>
    </div>
  );
}