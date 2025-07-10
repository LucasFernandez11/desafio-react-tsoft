import { useState } from "react";
import useApi from "../../../hooks/useApi"
import type { IGenresData } from "../../../types/genres.types";
import { Loading } from "../../ui/State/Loading";
import { Error } from "../../ui/State/Error";
import { Chip } from '../../ui/Chip/Chip';

export function GenresFilters() {
  const { data, isLoading, error } = useApi<IGenresData>('genre/movie/list');
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <Loading title="Cargando géneros" />
  if (error) return <Error message={error.message} />

  const genres = data?.genres ?? [];
  const visibleGenres = showAll ? genres : genres.slice(0, 5);

  return (
    <div className="p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Favourite genres</h2>

      <div className="flex flex-wrap gap-3 mb-2">
        {visibleGenres.map((genre) => (
          <Chip key={genre.id} id={genre.id} label={genre.name} />
        ))}
      </div>

      {genres.length > 5 && (
        <button
          className="text-xs text-gray-400 hover:text-white transition-colors"
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? 'Show less' : `Show all (${genres.length})`}
        </button>
      )}
    </div>
  );
}
