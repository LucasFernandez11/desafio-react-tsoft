import useApi from "../../../hooks/useApi"
import type { Movie, MovieResponse } from "../../../types/movies.types"
import { Loading } from "../../atoms/State/Loading"
import Card from "../Card/Card"
import { Error } from "../../atoms/State/Error"

const title = "Nuevos trailers"
export function Trailer() {
  const { data: trailers, isLoading, error } = useApi<MovieResponse>('movie/upcoming')

  if (error) {
    return <Error message={error.message} className="mt-2" />
  }

  if (isLoading) {
    return <Loading title={title} className="mt-2" />
  }

  return (
    <section className="h-full p-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {trailers?.results.map((movie: Movie) => (
          <div key={movie.id}>
            <Card
              title={movie.title}
              imagePath={movie.backdrop_path || movie.poster_path || ''}
              popularity={movie.vote_average}
              description={movie.overview}
              release_date={movie.release_date}
              original_language={movie.original_language}
              layout="trailer"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
