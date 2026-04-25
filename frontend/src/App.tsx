// src/App.tsx
import { useState } from 'react';
import { FilaPlanta } from './components/FilaPlanta';
import { HOTEL_DATA } from './utils/inventario'; // Importamos los datos
import type { Habitacion } from './types/index';

export default function App() {
  // 1. Estado para las plantas (los datos del hotel)
  const [plantas, setPlantas] = useState(HOTEL_DATA);
  
  // 2. Estado para saber qué habitación hemos clicado (como en Hestia)
  const [seleccionada, setSeleccionada] = useState<Habitacion | null>(null);

  // 3. Lógica para cambiar estados (Check-in, Check-out, Limpieza)
  const cambiarEstado = (numero: string, nuevoEstado: any) => {
    const dataActualizada = plantas.map(p => ({
      ...p,
      habitaciones: p.habitaciones.map(h => 
        h.numero === numero ? { ...h, estado: nuevoEstado } : h
      )
    }));
    setPlantas(dataActualizada);
    setSeleccionada(null); // Cerramos el panel lateral
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-black text-slate-900 uppercase">Rack Operativo</h1>
        <p className="text-slate-500 font-medium">Hestia PMS Clone - Control de Plantas</p>
      </header>

      <main className="max-w-6xl mx-auto">
        {plantas.map(p => (
          <FilaPlanta 
            key={p.planta} 
            piso={p.planta} 
            habitaciones={p.habitaciones} 
            onSeleccionar={setSeleccionada} 
          />
        ))}
      </main>

      {/* 4. Panel lateral de acciones (Se abre al seleccionar una habitación) */}
      {seleccionada && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 border-l border-slate-200 z-50">
          <button onClick={() => setSeleccionada(null)} className="text-slate-400 text-sm font-bold mb-4">✕ CERRAR</button>
          <h3 className="text-2xl font-black mb-1">HAB {seleccionada.numero}</h3>
          <p className="text-slate-400 text-xs font-bold uppercase mb-6">{seleccionada.tipo}</p>
          
          <div className="space-y-3">
            {seleccionada.estado === 'libre' && (
              <button onClick={() => cambiarEstado(seleccionada.numero, 'ocupada')} className="w-full bg-blue-600 text-white py-3 rounded font-bold text-sm">Hacer Check-in</button>
            )}
            {seleccionada.estado === 'ocupada' && (
              <button onClick={() => cambiarEstado(seleccionada.numero, 'sucia')} className="w-full bg-red-600 text-white py-3 rounded font-bold text-sm">Hacer Check-out</button>
            )}
            {seleccionada.estado === 'sucia' && (
              <button onClick={() => cambiarEstado(seleccionada.numero, 'libre')} className="w-full bg-yellow-500 text-white py-3 rounded font-bold text-sm">Marcar como Limpia</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}