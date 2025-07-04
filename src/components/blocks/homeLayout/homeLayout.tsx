import { HeroSection } from "../../sections/HeroSection/HeroSection";
import { Trailer } from "../../sections/Trailer/Trailer";
import { GenresFilters } from "../../sections/GenreFilters/GenresFilters";
import PopularSection from "../../sections/PopularSection/PopularSection";
import ContinueWatchingSection from "../../sections/ContinueWatching/ContinueWatchingSection";


const HomeLayout = () => {
  return (  
        <div className="flex flex-col lg:flex-row h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Sidebar - Se convierte en drawer en móviles */}
      <div className="w-full lg:w-[30%] xl:w-[25%] 2xl:w-[20%] flex flex-col border-r border-gray-800 bg-zinc-900 z-10">
        {/* Botón para móviles */}
        <button 
          className="group lg:hidden flex items-center justify-between w-full p-4 bg-zinc-800 border-b border-gray-800"
          onClick={() => {
            const sidebar = document.querySelector('.sidebar-content');
            const arrow = document.querySelector('.menu-arrow');
            sidebar?.classList.toggle('hidden');
            sidebar?.classList.toggle('flex');
            arrow?.classList.toggle('rotate-90');
          }}
          aria-label="Toggle menu"
        >
          <span className="font-medium">Menú lateral</span>
          <svg 
            className="menu-arrow w-5 h-5 transform transition-transform duration-200 ease-in-out" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
        
        {/* Contenido del sidebar */}
        <div className="sidebar-content hidden lg:flex flex-col h-full">
          <div className="h-[60vh] lg:h-[70%] overflow-y-auto scrollbar-thin">
            <Trailer />
          </div>
          <div className="h-[40vh] lg:h-[30%] overflow-y-auto border-t border-gray-800 scrollbar-thin">
            <GenresFilters />
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="space-y-8 p-4 sm:p-6">
          <HeroSection />
          <div className="space-y-4">
            <PopularSection />
            <ContinueWatchingSection />
          </div>
        </div>
      </div>
      
      {/* Overlay para móviles */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden hidden"
        onClick={() => {
          const sidebar = document.querySelector('.sidebar-content');
          sidebar?.classList.add('hidden');
        }}
      />
    </div>
  )
 
};

export default HomeLayout;