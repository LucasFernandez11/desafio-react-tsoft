import { useState, useEffect, useCallback } from 'react';
import { tmdb } from '../services/api';
import type { Movie } from '../types/Movie';

type UseMovieSearchProps = {
  query?: string;
  genreId?: number;
};

export const useMovieSearch = ({ query, genreId }: UseMovieSearchProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      let endpoint = '';
      let params: Record<string, string | number> = {
        language: 'es-ES',
        page: 1,
      };

      if (query && query.trim() !== '') {
        endpoint = '/search/movie';
        params.query = query;
      } else if (genreId) {
        endpoint = '/discover/movie';
        params.with_genres = genreId;
      } else {
        setMovies([]);
        return;
      }

      const { data } = await tmdb.get(endpoint, { params });
      setMovies(data.results);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, [query, genreId]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    isLoading,
    error,
  };
};
