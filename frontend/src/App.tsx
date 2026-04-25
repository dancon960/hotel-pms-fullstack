import { useState } from 'react';
import { FilaPlanta } from './components/FilaPlanta';
import { HOTEL_DATA } from './utils/inventario';
import type { Habitacion, Planta } from './types/index';

export default function App() {
  // 1. Estado para las plantas (los datos que vienen del inventario)
  const [plantas, setPlantas] = useState<Planta[]>(HOTEL_DATA);
  
  // 2. Estado para la habitación que seleccionamos para gestionar
  const [seleccionada, setSeleccionada] = useState<Habitacion | null>(null);

  // 3. Lógica para cambiar el estado de la habitación
  const cambiarEstado = (numero: string, nuevoEstado: Habitacion['estado']) => {
    setPlantas(prev => prev.map(p => ({
      ...p,
      habitaciones: p.habitaciones.map(h => 
        h.numero === numero ? { ...h, estado: nuevoEstado } : h
      )
    })));
    setSeleccionada(null); // Cerramos el panel después de la acción
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Cabecera corregida sin nombres raros */}
      <header className="max-w-6xl mx-auto mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
          Gestión de Habitaciones
        </h1>
        <p className="text-slate-500 font-medium">Panel de Control de Recepción</p>
      </header>

      {/* Rack organizado por plantas */}
      <main className="max-w-6xl mx-auto">
        {plantas.map(p => (
          <FilaPlanta 
            key={p.piso} 
            piso={p.piso} 
            habitaciones={p.habitaciones} 
            onSeleccionar={setSeleccionada} 
          />
        ))}
      </main>

      {/* Panel de Gestión Lateral (Interfaz tipo PMS) */}
      {seleccionada && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 border-l border-slate-200 z-50 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-black text-slate-800">HAB {seleccionada.numero}</h3>
            <button 
              onClick={() => setSeleccionada(null)} 
              className="text-slate-400 hover:text-slate-600 font-bold text-lg"
            >
              ✕
            </button>
          </div>
          
          <p className="text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest">
            Tipo: {seleccionada.tipo} | Estado: {seleccionada.estado}
          </p>
          
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Acciones disponibles</p>
            
            {seleccionada.estado === 'libre' && (
              <button 
                onClick={() => cambiarEstado(seleccionada.numero, 'ocupada')} 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Hacer Check-in
              </button>
            )}
            
            {seleccionada.estado === 'ocupada' && (
              <button 
                onClick={() => cambiarEstado(seleccionada.numero, 'sucia')} 
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Hacer Check-out
              </button>
            )}
            
            {seleccionada.estado === 'sucia' && (
              <button 
                onClick={() => cambiarEstado(seleccionada.numero, 'libre')} 
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Marcar como Limpia
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}