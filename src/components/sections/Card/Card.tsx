import { Link } from 'react-router-dom';
import Image from '../../ui/Image/Image';

interface CardProps {
  title: string;
  imagePath: string;
  popularity: number;
  description?: string;
  release_date?: string;
  original_language?: string;
  id?: number;
  layout?: 'hero' | 'continue' | 'popular' | 'trailer' | 'single';
  genres?: string[];
}

export default function Card({
  title,
  imagePath,
  popularity,
  description,
  release_date,
  original_language,
  id,
  layout = 'popular',
  genres = [],
}: CardProps) {
  const renderGenres = () => {
    if (genres.length) return genres.join(' / ');
    return ''; // fallback
  };

  const playButton = (
    <Link
      to={`/movie/${id}`}
      className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-full"
    >
      <svg
        className="w-3 h-3 md:w-4 md:h-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
      </svg>
    </Link>
  );

  const rating = (
    <div className="flex items-center gap-1 text-white text-sm md:text-base">
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span>{popularity.toFixed(1)}</span>
    </div>
  );

  // ✅ LAYOUT: HERO (sin cambios)
  if (layout === 'hero') {
    return (
      <div className="relative w-full h-[200px] md:h-[260px] rounded-xl overflow-hidden shadow-lg">
        <Image
          path={imagePath}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-end justify-between px-6 py-4">
          <Link
            to={`/movie/${id}`}
            className="flex items-center gap-2 btn-orange text-white font-bold py-2 px-4 rounded shadow-lg text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
            Ver ahora
          </Link>

          <h2 className="text-white text-xl md:text-4xl font-extrabold text-right max-w-[60%] leading-tight">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  // ✅ LAYOUT: POPULAR
  if (layout === 'popular') {
    return (
      <div className="relative rounded-xl overflow-hidden group">
        <Image
          path={imagePath}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-black/60 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            {playButton}
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
              <p className="text-gray-300 text-xs md:text-sm">{renderGenres()}</p>
            </div>
          </div>
          {rating}
        </div>
      </div>
    );
  }

  // ✅ LAYOUT: CONTINUE (con descripción en hover)
  if (layout === 'continue') {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      {/* Imagen */}
      <Image
        path={imagePath}
        alt={title}
        className="object-cover w-full h-full"
      />

      {/* Blur inferior con play a la izquierda */}
      <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-black/60 backdrop-blur-md flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          {/* Botón de play */}
          <Link
            to={`/movie/${id}`}
            className="w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 flex items-center justify-center transition"
            title="Ver película"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
          </Link>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              {original_language?.toUpperCase()} • {release_date?.slice(0, 4)}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-white text-sm font-semibold">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{popularity.toFixed(1)}</span>
        </div>
      </div>

      {/* Hover con descripción solo arriba */}
      {description && (
        <div className="absolute inset-x-0 top-0 bottom-14 bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 text-sm z-20 pointer-events-none">
          <p className="line-clamp-4">{description}</p>
        </div>
      )}
    </div>
  );
}

  // ✅ LAYOUT: TRAILER
  if (layout === 'trailer') {
    return (
      <div className="relative rounded-xl overflow-hidden group">
        <Image
          path={imagePath}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-black/60 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            {playButton}
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                {release_date ? new Date(release_date).getFullYear() : ''}
              </p>
            </div>
          </div>
          {rating}
        </div>
      </div>
    );
  }

  // ✅ LAYOUT: SINGLE
if (layout === 'single') {
  return (
    <Link
      to={`/movie/${id}`}
      className="relative flex flex-col items-center gap-2 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group bg-zinc-800 hover:bg-zinc-700 text-center"
    >
      <Image
        path={imagePath}
        alt={title}
        className="object-cover w-full rounded-t-xl"
      />
      <div className="p-3 w-full flex flex-col gap-1">
        <h3 className="text-white text-sm md:text-base font-semibold line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm">
          {release_date?.slice(0, 4)} • {original_language?.toUpperCase()}
        </p>
        <div className="flex justify-center">{rating}</div>
      </div>
    </Link>
  );
}

}
