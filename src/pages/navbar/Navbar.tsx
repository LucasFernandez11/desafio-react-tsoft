import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon, BellIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [inputSearchQuery, setInputSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isLoggedIn = false;

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputSearchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-zinc-950/90 backdrop-blur-sm text-white shadow-md sticky top-0 z-50 border-b border-zinc-800">
      <style>{`
        .nav-link {
          padding: 0.5rem 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
          color: rgb(209 213 219);
        }
        .nav-link:hover {
          color: white;
        }
        .nav-link.active {
          color: rgb(249 115 22);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group relative flex-shrink-0">
            <div className="relative">
              <img
                src={'/cinema_paradiso.png'}
                alt="Cinema Paradiso"
                loading='lazy'
                className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </div>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          {/* Navegación principal - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Inicio
            </NavLink>
            <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Películas
            </NavLink>
            <NavLink to="/tv-show" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              TV shows
            </NavLink>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            aria-label="Menú"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Barra de búsqueda (versión móvil) */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black/80 z-40 md:hidden flex items-center px-4">
              <div className="relative w-full">
                {/* <form onSubmit={handleSearch} className="relative"> */}
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Buscar películas, series..."
                    className="w-full bg-zinc-800 text-white px-4 py-3 pl-12 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={inputSearchQuery}
                    onChange={(e) => setInputSearchQuery(e.target.value)}
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                {/* </form> */}
              </div>
            </div>
          )}

          {/* Controles de la derecha */}
          <div className="flex items-center space-x-4">
            {/* Barra de búsqueda (versión escritorio) */}
            <div className={`hidden md:block transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar..."
                  className={`w-full bg-zinc-800 text-white px-4 py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${!isSearchOpen && 'opacity-0'}`}
                  value={inputSearchQuery}
                  onChange={(e) => setInputSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-opacity duration-300 ${!isSearchOpen ? 'opacity-100' : 'opacity-0'}`} />
              </form>
            </div>

            {/* Botón de búsqueda (solo móvil) */}
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => {
                  if (searchInputRef.current) {
                    searchInputRef.current.focus();
                  }
                }, 0);
              }}
              aria-label="Search"
              className="md:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Botón de búsqueda (escritorio) */}
            <button
              onClick={() => {
                const newState = !isSearchOpen;
                setIsSearchOpen(newState);
                if (newState) {
                  setTimeout(() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }, 0);
                }
              }}
              aria-label="Search"
              className="hidden md:flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Notificaciones */}
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-zinc-800 relative focus:outline-none">
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Perfil */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-zinc-800 focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-medium">
                    U
                  </div>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700">Mi perfil</Link>
                  <Link to="/watchlist" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700">Mi lista</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700">Configuración</Link>
                  <div className="border-t border-zinc-700 my-1"></div>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-700">Cerrar sesión</button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 transition-colors"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-48' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 py-4 px-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `px-4 py-3 rounded-md text-sm font-medium ${
                isActive ? 'bg-zinc-800 text-orange-500' : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/movies" 
              className={({ isActive }) => `px-4 py-3 rounded-md text-sm font-medium ${
                isActive ? 'bg-zinc-800 text-orange-500' : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Películas
            </NavLink>
            <NavLink 
              to="/tv-show" 
              className={({ isActive }) => `px-4 py-3 rounded-md text-sm font-medium ${
                isActive ? 'bg-zinc-800 text-orange-500' : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              TV shows
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
