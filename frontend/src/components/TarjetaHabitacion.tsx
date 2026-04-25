// src/components/TarjetaHabitacion.tsx
import type { Habitacion } from '../types/index';

interface Props {
  hab: Habitacion;
  alClic: (num: string) => void;
}

export function TarjetaHabitacion({ hab, alClic }: Props) {
  const estilosEstado: Record<string, string> = {
    libre: 'border-green-500 text-green-600',
    ocupada: 'border-red-500 text-red-600',
    sucia: 'border-yellow-500 text-yellow-600',
    mantenimiento: 'border-gray-500 text-gray-600'
  };

  return (
    <div 
      onClick={() => alClic(hab.numero)}
      className={`bg-white p-4 rounded-lg shadow-md border-l-4 cursor-pointer hover:scale-[1.05] transition-transform ${estilosEstado[hab.estado]}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-bold text-slate-400">{hab.numero}</span>
        <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase font-bold">{hab.tipo}</span>
      </div>
      <div className="font-black text-sm uppercase">{hab.estado}</div>
      {hab.cliente && <p className="text-xs text-slate-600 mt-2 italic truncate">👤 {hab.cliente}</p>}
    </div>
  );
}