import Card from "./Card"
import { Loading } from "../../ui/State/Loading";
import { Error } from "../../ui/State/Error";
import type { Movie } from "../../../types/Movie";
import { useState } from "react";

interface Props {
  title?: string;
  movies?: Movie[];
  layout: "hero" | "continue" | "popular" | "trailer" | "single";
  isLoading?: boolean;
  error?: string | null;
  width?: string;
  slice?: number;
  height?: string;
  maxHeight?: string;
  cardContainerClassName?: string;
}

export default function CardContainer({
  title,
  movies = [],
  layout,
  isLoading = false,
  error = null,
  slice = movies.length,
  cardContainerClassName,
}: Props) {
  const [showAll, setShowAll] = useState(false);
  const displayedMovies = showAll ? movies : movies.slice(0, slice);

  if (error) return <Error message={error} className="mt-2" />;
  if (isLoading) return <Loading title={title} className="mt-2" />;

  return (
    <section className="w-full">
      {/* Header con título + botón */}
      {layout !== "hero" && title && (
        <div className="flex items-center justify-between px-2 mb-3">
          <h2 className="text-lg md:text-xl font-semibold text-white dark:text-white">
            {title}
          </h2>

          {movies.length > slice && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {showAll ? 'Show less' : `All movies (${movies.length})`} &gt;
            </button>
          )}
        </div>
      )}

      {/* HERO */}
      {layout === "hero" && (
        <div className={`w-full ${cardContainerClassName ?? ''}`}>
          {displayedMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imagePath={movie.backdrop_path || movie.poster_path || ''}
              popularity={movie.vote_average}
              description={movie.overview}
              release_date={movie.release_date}
              original_language={movie.original_language}
              layout={layout}
            />
          ))}
        </div>
      )}

      {/* TRAILER (scroll vertical) */}
      {layout === "trailer" && (
        <div className="overflow-y-auto flex flex-col gap-4 scrollbar-thin pr-2">
          {displayedMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imagePath={movie.backdrop_path || movie.poster_path || ''}
              popularity={movie.vote_average}
              description={movie.overview}
              release_date={movie.release_date}
              original_language={movie.original_language}
              layout={layout}
            />
          ))}
        </div>
      )}

      {/* CONTINUE (scroll horizontal) */}

      {layout === "continue" && (
        <div className="relative px-2">
          {/* Mobile: horizontal scroll */}
          {!showAll ? (
            <div className="overflow-x-auto scrollbar-thin">
              <div className="flex gap-4 w-max">
                {displayedMovies.map((movie) => (
                  <div key={movie.id} className="flex-shrink-0 w-[300px] md:w-[450px] mb-2">
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
                ))}
              </div>
            </div>
          ) : (
            // Desktop + showAll: Grid vertical
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedMovies.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  imagePath={movie.backdrop_path || movie.poster_path || ''}
                  popularity={movie.vote_average}
                  description={movie.overview}
                  release_date={movie.release_date}
                  original_language={movie.original_language}
                  layout={layout}
                />
              ))}
            </div>
          )}
        </div>
      )}




      {/* POPULAR (scroll horizontal) */}
      {layout === "popular" && (
        <div className="relative px-2">
          {/* Mobile: scroll horizontal */}
          {!showAll ? (
            <div className="overflow-x-auto scrollbar-thin">
              <div className="flex gap-4 w-max">
                {displayedMovies.map((movie) => (
                  <div key={movie.id} className="flex-shrink-0 w-[260px] md:w-[300px] mb-2">
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
                ))}
              </div>
            </div>
          ) : (
            // Desktop y modo expandido: grilla
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedMovies.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  imagePath={movie.backdrop_path || movie.poster_path || ''}
                  popularity={movie.vote_average}
                  description={movie.overview}
                  release_date={movie.release_date}
                  original_language={movie.original_language}
                  layout={layout}
                />
              ))}
            </div>
          )}
        </div>
      )}

    </section>
  );
}
