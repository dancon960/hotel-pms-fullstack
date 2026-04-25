import React from 'react';

// 1. Inventario de habitaciones
const HABITACIONES = [
  { numero: '101', tipo: 'Doble', estado: 'libre' },
  { numero: '102', tipo: 'Suite', estado: 'ocupada', cliente: 'García, Daniel' },
  { numero: '103', tipo: 'Individual', estado: 'sucia' },
  { numero: '104', tipo: 'Doble', estado: 'libre' },
  { numero: '105', tipo: 'Doble', estado: 'ocupada', cliente: 'Martínez, Ana' },
  { numero: '201', tipo: 'Suite', estado: 'mantenimiento' },
  { numero: '202', tipo: 'Doble', estado: 'sucia' },
  { numero: '203', tipo: 'Individual', estado: 'libre' },
];

// 2. Componente de la Tarjeta
function TarjetaHabitacion({ hab }: { hab: any }) {
  const estilosEstado: any = {
    libre: 'border-green-500 text-green-600',
    ocupada: 'border-red-500 text-red-600',
    sucia: 'border-yellow-500 text-yellow-600',
    mantenimiento: 'border-gray-500 text-gray-600'
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${estilosEstado[hab.estado] || 'border-slate-300'}`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-bold text-slate-400">{hab.numero}</span>
        <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase font-bold">
          {hab.tipo}
        </span>
      </div>
      <div className="font-black text-sm uppercase tracking-wider">
        {hab.estado}
      </div>
      {hab.cliente ? (
        <p className="text-xs text-slate-600 mt-2 font-medium truncate italic">
          👤 {hab.cliente}
        </p>
      ) : (
        <div className="h-6"></div> // Espacio vacío para mantener el tamaño
      )}
    </div>
  );
}

// 3. Aplicación Principal
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Cabecera */}
      <header className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          CloudHotel <span className="text-blue-600">PMS</span>
        </h1>
        <p className="text-slate-500 font-medium">Panel de Control de Recepción</p>
      </header>

      {/* Grid del Rack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {HABITACIONES.map((hab) => (
          <TarjetaHabitacion key={hab.numero} hab={hab} />
        ))}
      </div>

      {/* Resumen rápido al pie */}
      <footer className="mt-12 flex gap-6 text-xs font-bold uppercase text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div> Libre
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div> Ocupada
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div> Sucia
        </div>
      </footer>
    </div>
  );
}