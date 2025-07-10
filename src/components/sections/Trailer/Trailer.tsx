import type { Movie } from "../../../types/Movie";
import CardContainer from "../Card/CardContainer";

interface TrailerProps {
  movies: Movie[];
  isLoading: boolean;
  error?: string;
  slice?: number;
  maxHeight?: string;
}

export function Trailer({ movies, isLoading, error, slice = 2, maxHeight }: TrailerProps) {
  return (
    <CardContainer
      title="New trailers"
      movies={movies}
      layout="trailer"
      isLoading={isLoading}
      error={error}
      slice={slice}
       maxHeight={maxHeight}  
    />
  );
}
