import axios from 'axios';

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});