import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './pages/navbar/Navbar';
import ErrorBoundary from './components/blocks/ErrorHome/ErrorHome';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function ThemedApp() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
}, [theme]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative animate-pulse">
          <div className="absolute inset-0 rounded-full animate-ping bg-red-500 opacity-30"></div>
          <img
            src={'...'}
            alt="Explorador de Películas"
            loading='lazy'
            className="relative z-10 h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  }

  return (
   <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <ThemedApp />
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;