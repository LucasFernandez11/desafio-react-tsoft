import { useState } from "react";
import { HeroSection } from "../../sections/HeroSection/HeroSection";
import { GenresFilters } from "../../sections/GenreFilters/GenresFilters";
import PopularSection from "../../sections/PopularSection/PopularSection";
import ContinueWatchingSection from "../../sections/ContinueWatching/ContinueWatchingSection";
import TrailerContainer from "../../sections/Trailer/TrailerContainer";

const HomeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      {/* Botón global en mobile */}
      <div className="w-full flex items-center justify-between p-4 border-b border-zinc-700 bg-zinc-900 z-30 lg:hidden">
        <span className="font-medium text-white">Menú lateral</span>
        <button onClick={toggleSidebar} className="text-white">
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${sidebarOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          className="z-50 top-[60px] bg-zinc-900 w-4/5 max-w-xs lg:w-[25%] xl:w-[20%] 2xl:w-[18%] h-screen flex flex-col border-r border-zinc-700 transition-all duration-300 fixed  left-0 lg:static"
        >
          {/* Botón cerrar mobile - fijo arriba */}
          <div className="lg:hidden sticky  z-20 bg-zinc-900 p-4 border-b border-zinc-700">
            <button
              onClick={closeSidebar}
              className="text-white text-sm font-medium border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition w-full text-center"
            >
              Cerrar menú
            </button>
          </div>

          {/* Botón colapsar en desktop */}
          <div className="hidden lg:flex justify-end p-4">
            <button
              onClick={closeSidebar}
              className="text-white text-sm font-medium border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Contenido scrolleable separado */}
          <div className="flex-1 flex flex-col px-4 space-y-4 overflow-hidden">
            <div className="h-[60%] overflow-y-auto scrollbar-thin pr-1">
              <TrailerContainer />
            </div>
            <div className="h-[40%] overflow-y-auto scrollbar-thin border-t border-zinc-700 pt-4 pr-1">
              <GenresFilters />
            </div>
          </div>
        </div>
      )}
      {/* Botón mostrar menú colapsado en desktop */}
      {!sidebarOpen && (
        <div className="hidden lg:flex justify-end p-4 bg-zinc-900 border-b border-zinc-700">
          <button
            onClick={toggleSidebar}
            className="text-white text-sm font-medium border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Contenido principal con scroll global */}
      <div className="flex-1 z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
          <HeroSection />
          <div className="space-y-4">
            <ContinueWatchingSection />
            <PopularSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
