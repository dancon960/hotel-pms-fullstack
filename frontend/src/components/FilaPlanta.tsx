import type { Habitacion } from '../types';
import { TarjetaHabitacion } from './TarjetaHabitacion';

interface Props {
  piso: number;
  habitaciones: Habitacion[];
  onSeleccionar: (hab: Habitacion) => void;
}

export function FilaPlanta({ piso, habitaciones, onSeleccionar }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-black text-slate-800 mb-4 border-b pb-2">PLANTA {piso}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {habitaciones.map(hab => (
          <TarjetaHabitacion key={hab.numero} hab={hab} alClic={() => onSeleccionar(hab)} />
        ))}
      </div>
    </div>
  );
}