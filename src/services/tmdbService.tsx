import { tmdb } from './api';
import type { Movie } from '../types/Movie';


export interface Genre {
  id: number;
  name: string;
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get('/movie/popular');
  return response.data.results;
};

export const getMovieDetails = async (id: string | number): Promise<Movie> => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await tmdb.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data.results;
};

export const getMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const response = await tmdb.get('/discover/movie', {
    params: {
      with_genres: genreId,
    },
  });
  return response.data.results;
};

export const getGenres = async (): Promise<Genre[]> => {
  const response = await tmdb.get('/genre/movie/list');
  return response.data.genres;
};