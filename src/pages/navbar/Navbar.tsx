import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon, Bars3Icon, UserCircleIcon,} from '@heroicons/react/24/outline';
import ThemeSelector from '../../components/ui/ThemeSelector/ThemeSelector';
import { useTheme } from '../../context/ThemeContext';
import señalador from "../../assets/Vector-señalador.png";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [inputSearchQuery, setInputSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

  const isDark =
    theme === 'dark' || (theme === 'system' && prefersDark);

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
    <header className="backdrop-blur-sm shadow-md sticky top-0 z-[60] border-b border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="group relative flex-shrink-0">
            <h1 className={`text-xl font-bold tracking-wide relative transition-all duration-300 group-hover:scale-105 group-hover:text-orange-500 ${isDark ? 'text-white' : 'text-zinc-700'}`}>
              Movie Explorer
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 origin-center transform -translate-x-1/2 group-hover:w-full transition-all duration-300 bg-[radial-gradient(ellipse_at_center,_rgba(255,115,0,1)_0%,_rgba(255,115,0,0)_70%)]" />
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="relative flex flex-col items-center text-white hover:text-orange-400 transition"
            >
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium  ${isDark ? 'text-white' : 'text-zinc-700'
                  }`}>Movies</span>
                  {isActive && (
                    <img
                      src={señalador}
                      alt="señalador"
                      className="mt-1 h-3 w-auto animate-fade-in"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/tv-show"
              className="relative flex flex-col items-center text-white hover:text-orange-400 transition"
            >
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium  ${isDark ? 'text-white' : 'text-zinc-700'
                  }`}>TV shows</span>
                  {isActive && (
                    <img
                      src={señalador}
                      alt="señalador"
                      className="mt-1 h-3 w-auto animate-fade-in"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/tv-show"
              className="relative flex flex-col items-center text-white hover:text-orange-400 transition"
            >
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium  ${isDark ? 'text-white' : 'text-zinc-700'
                  }`}>Animations</span>
                  {isActive && (
                    <img
                      src={señalador}
                      alt="señalador"
                      className="mt-1 h-3 w-auto animate-fade-in"
                    />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/search"
              className="relative flex flex-col items-center text-white hover:text-orange-400 transition"
            >
              {({ isActive }) => (
                <>
                  <span className={`text-sm font-medium  ${isDark ? 'text-white' : 'text-zinc-700'
                  }`}>Plans</span>
                  {isActive && (
                    <img
                      src={señalador}
                      alt="señalador"
                      className="mt-1 h-3 w-auto animate-fade-in"
                    />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:text-black hover:bg-zinc-200 focus:outline-none"
            aria-label="Menú"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-4">
            <ThemeSelector />

            <button
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                setTimeout(() => {
                  searchInputRef.current?.focus();
                }, 0);
              }}
              aria-label="Buscar"
              className="hidden md:flex items-center justify-center p-2 rounded-full hover:text-black hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {isSearchOpen && (
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center relative ml-2 w-64 transition-all"
              >
                <input
                  id="search-input"
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar películas..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-white dark:bg-zinc-800 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={inputSearchQuery}
                  onChange={(e) => setInputSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </form>
            )}

            <button
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => {
                  searchInputRef.current?.focus();
                }, 0);
              }}
              aria-label="Search"
              className="md:hidden p-2 rounded-full hover:text-black hover:bg-zinc-200 focus:outline-none"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            <button
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              title="Perfil"
            >
              <UserCircleIcon
                className={`h-7 w-7 ${isDark ? 'text-white' : 'text-zinc-700'
                  } transition-colors duration-300`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
