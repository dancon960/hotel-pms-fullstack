# Arquitectura de la Aplicación

### Decisiones de Diseño
Se ha optado por una **Arquitectura por Capas** en el frontend para asegurar que el proyecto sea escalable y fácil de mantener.

### Estructura de Carpetas
* **src/components/**: Contiene componentes reutilizables como la tarjeta de habitación y la fila por plantas.
* **src/types/**: Aquí se centralizan las interfaces de TypeScript, asegurando que todos los componentes manejen los mismos modelos de datos.
* **src/utils/**: Espacio para el inventario de prueba y datos estáticos que simulan la respuesta de una futura API.
* **src/App.tsx**: Actúa como el orquestador principal, gestionando el estado global del Rack.

### Tecnologías utilizadas
* **React + Vite**: Para un desarrollo ágil y carga rápida.
* **TypeScript**: Para evitar errores en el flujo de datos y asegurar un tipado estricto en las habitaciones.
* **Tailwind CSS**: Para el diseño visual, permitiendo crear una interfaz limpia y responsive de forma rápida.

### Flujo de Datos
El estado de las habitaciones se maneja de forma centralizada en el componente principal y se distribuye a los componentes hijos mediante props, siguiendo el flujo unidireccional de React.