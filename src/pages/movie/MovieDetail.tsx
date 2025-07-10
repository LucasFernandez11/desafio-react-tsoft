import { useParams, useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import type { MovieDetailsResponse } from '../../types/Movie';
import { formatCurrency } from '../../utils/format';
import { Loading } from '../../components/ui/State/Loading';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useApi<MovieDetailsResponse>(`movie/${id}`);
  const navigate = useNavigate();

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Fecha no disponible';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return <Loading title={movie?.title} className="mt-2" />
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-4">No se encontró la película</h2>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtimeHours = movie?.runtime ? Math.floor(movie.runtime / 60) : 0;
  const runtimeMinutes = movie?.runtime ? movie.runtime % 60 : 0;
  const formattedDate = movie.release_date 
    ? formatDate(movie.release_date)
    : 'Fecha no disponible';

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: movie.backdrop_path 
            ? `url(${import.meta.env.VITE_API_IMAGE_BASE_URL}original${movie.backdrop_path})` 
            : 'linear-gradient(to right, #1f2937, #111827)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <div className="flex flex-col md:flex-row gap-6">
              {movie.poster_path && (
                <div className="w-48 h-72 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 hidden md:block">
                  <img 
                    src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}w500${movie.poster_path}`} 
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <button 
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Volver atrás"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {movie.title} <span className="text-gray-400 font-normal">({releaseYear})</span>
                  </h1>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>{movie.vote_average?.toFixed(1)}</span>
                    <span className="text-gray-500">({movie.vote_count} votos)</span>
                  </div>
                  
                  {movie.genres?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {movie.genres.map(genre => (
                        <span key={genre.id} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {movie.runtime && movie.runtime > 0 && (
                    <span>{runtimeHours}h {runtimeMinutes}m</span>
                  )}
                  
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    {movie.status === 'Released' ? 'Estrenada' : movie.status}
                  </span>
                </div>
                
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2">Sinopsis</h2>
                  <p className="text-gray-300">{movie.overview || 'Sin sinopsis disponible.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Detalles</h2>
            <div className="space-y-2">
              <p><span className="text-gray-400">Título original:</span> {movie.original_title}</p>
              <p><span className="text-gray-400">Fecha de estreno:</span> {formattedDate}</p>
              <p><span className="text-gray-400">Idioma original:</span> {movie.original_language?.toUpperCase()}</p>
              {movie.budget > 0 && (
                <p><span className="text-gray-400">Presupuesto:</span> {formatCurrency(movie.budget)}</p>
              )}
              {movie.revenue > 0 && (
                <p><span className="text-gray-400">Recaudación:</span> {formatCurrency(movie.revenue)}</p>
              )}
              {movie.homepage && (
                <p>
                  <span className="text-gray-400">Sitio web:</span>{' '}
                  <a 
                    href={movie.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Visitar sitio oficial
                  </a>
                </p>
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Producción</h2>
            {movie.production_companies?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Compañías</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.production_companies.map(company => (
                    <span key={company.id} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {movie.production_countries?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Países</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.production_countries.map((country, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
