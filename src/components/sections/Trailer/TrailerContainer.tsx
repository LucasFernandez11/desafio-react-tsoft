import { useState } from "react";
import useApi from "../../../hooks/useApi";
import type { MovieResponse } from "../../../types/Movie";
import { Trailer } from "./Trailer";

export default function TrailerContainer() {
  const { data, isLoading, error } = useApi<MovieResponse>('movie/upcoming');
  const [showAll] = useState(false);

  const movies = data?.results || [];
  const slice = showAll ? movies.length : 2;

  return (
    <>
      <Trailer
        movies={movies}
        isLoading={isLoading}
        error={error?.message}
        slice={slice}
        maxHeight={showAll ? "max-h-none" : "max-h-[360px]"}
      />    
    </>
  );
}
