import { useSearchParams, useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Card from '../../components/sections/Card/Card';
import { Loading } from '../../components/ui/State/Loading';
import type { MovieResponse } from '../../types/Movie';
import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';


export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  const { data: movies, isLoading, status } = useApi<MovieResponse>(`search/movie?query=${query}`)
  useEffect(() => {
    if (!isLoading && movies?.results.length) {
      const input = document.getElementById('search-input') as HTMLInputElement | null;
      if (input) {
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }, [isLoading, movies]);

  if (isLoading) {
    return <Loading title="Buscando..." className="mt-8" />;
  }

  if (status === HttpStatusCode.NotFound || !movies?.results.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-white-500 mb-4">No se encontró la película</h2>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <h1 className="text-3xl font-bold text-white mb-8">
        Result for: <span className="text-orange-500">{query}</span>
      </h1>

      <button
        onClick={() => navigate('/')}
        className="self-start md:self-center px-4 py-2 btn-orange text-white rounded  transition-colors"
      >
        Back to Home
      </button>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {movies?.results.map(movie => (
        <div key={movie.id} className="h-full">
          <Card
            id={movie.id}
            title={movie.title || ''}
            imagePath={movie.poster_path || ''}
            popularity={movie.vote_average * 10}
            release_date={movie.release_date}
            original_language={movie.original_language}
            layout="single"
          />
        </div>
      ))}
    </div>
  </div>
  );

  

}
