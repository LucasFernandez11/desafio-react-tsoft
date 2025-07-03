import Card from "./Card"
import { Loading } from "../../ui/State/Loading";
import { Error } from "../../ui/State/Error";
import type { Movie } from "../../../types/Movie";
import { useState } from "react";

interface Props {
  title?: string
  movies?: Movie[]
  layout: "hero" | "continue" | "popular"
  isLoading?: boolean
  error?: string | null
  width?: string
  slice?: number
}

export default function CardContainer({ 
  title, 
  movies = [], 
  layout, 
  isLoading = false, 
  error = null,
  width = 'w-40 md:w-48',
  slice = movies.length,
}: Props) {
  const [showAll, setShowAll] = useState(false);
  const displayedMovies = showAll ? movies : movies.slice(0, slice);
  if (error) {
    return <Error message={error} className="mt-2" />
  }

  if (isLoading) {
    return <Loading title={title} className="mt-2" />
  }

  return (
    <section className="">
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      <div className={`flex ${showAll ? 'overflow-x-auto scrollbar-thin px-2' : 'w-full'}`}>
        <div className="flex gap-4 w-full">
          {displayedMovies.length ? displayedMovies.map((movie: Movie) => (
            <div key={movie.id} className={`flex-shrink-0 mb-2 ${width}`}>
              <Card
                id={movie.id}
                title={movie.title}
                imagePath={movie.backdrop_path || movie.poster_path || ''}
                popularity={movie.vote_average}
                description={movie.overview}
                release_date={movie.release_date}
                original_language={movie.original_language}
                layout={layout}
              />
            </div>
          ))
          : <p>No hay data disponible</p>
          }
        </div>
      </div>
      {movies.length > slice && (
        <div className="flex justify-end m-4">
          <button 
            className="text-xs hover:text-gray-400 hover:cursor-pointer transition-colors"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Ver menos' : `Ver todas (${movies.length})`}
          </button>
        </div>
      )}
    </section>
  )
}
