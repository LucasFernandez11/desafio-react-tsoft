import { Link } from 'react-router-dom';

export const ErrorFallback = () => (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
    <div className="max-w-md w-full text-center">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Error en la aplicación</h1>
      <p className="mb-6 text-gray-300">
        Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors mr-2"
      >
        Recargar página
      </button>
      <Link 
        to="/" 
        className="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
      >
        Ir al inicio
      </Link>
    </div>
  </div>
);
