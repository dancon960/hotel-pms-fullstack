function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">CloudHotel PMS</h1>
        <p className="text-slate-500">Sistema de Gestión de Ocupación</p>
      </header>

      {/* Ejemplo de Rack (Habitaciones) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Habitación Libre */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
          <span className="block text-sm font-semibold text-slate-400">101</span>
          <span className="text-green-600 font-bold">LIBRE</span>
        </div>

        {/* Habitación Ocupada */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
          <span className="block text-sm font-semibold text-slate-400">102</span>
          <span className="text-red-600 font-bold">OCUPADA</span>
          <p className="text-xs text-slate-500 truncate">García, Daniel</p>
        </div>

        {/* Habitación Sucia */}
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
          <span className="block text-sm font-semibold text-slate-400">103</span>
          <span className="text-yellow-600 font-bold">SUCIA</span>
        </div>
      </div>
    </div>
  );
}

export default App;