import { Link } from 'react-router-dom';
import Image from '../../ui/Image/Image';

interface CardProps {
  title: string
  imagePath: string
  popularity: number
  description?: string
  release_date?: string
  original_language?: string
  id?: number
  layout?: "hero" | "continue" | "popular" | "trailer" | "single"
}

export default function Card({ title, imagePath, popularity, description, release_date, original_language, id, layout = "popular" }: CardProps) {
  const baseStyle = "rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 bg-zinc-800 text-white"
  const layoutStyles = {
    hero: "aspect-video w-full",
    continue: "aspect-[4/4]",
    popular: "aspect-[3/3]",
    trailer: "aspect-video",
    single: "aspect-[2/3] sm:aspect-[3/4] md:aspect-[2/3]"
  }

  return (
    <div className={`${baseStyle} ${layoutStyles[layout]} relative group`}>
      <Image 
        path={imagePath} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
      />
      
      {/* contenido siempre visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-2 md:p-3 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-sm md:text-base font-bold text-white line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 text-yellow-400">
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs md:text-sm font-semibold">{popularity.toFixed(1)}</span>
        </div>
      </div>

      {/* este es el contenido con hover*/}
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 md:p-3 flex flex-col">
        <div className="flex-grow overflow-y-auto text-xs md:text-xs text-gray-200 scrollbar-thin">
          {description && (
            <p className="mb-2">{description}</p>
          )}
        </div>
        <div className="pt-2 border-t border-gray-700 mt-2">
          <div className="flex justify-between items-center text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-1 text-yellow-400">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{popularity.toFixed(1)}</span>
            </div>
            <div className="flex gap-2 md:gap-4">
              <Link 
                to={`/movie/${id}`}
                className="group relative px-2 py-1 text-xs font-medium text-white overflow-hidden rounded hover:bg-red-600/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                  <span>Details</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
            <div className="flex gap-2 md:gap-4">
              {release_date && <span>{new Date(release_date).getFullYear()}</span>}
              {original_language && (
                <span className="uppercase">{original_language}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
