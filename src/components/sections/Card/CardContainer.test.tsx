import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
import type { Movie } from '../../../types/Movie';

const mockMovies: Movie[] = [
{
    adult: false,
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    genre_ids: [28, 12, 878],
    id: 27205,
    original_language: "en",
    original_title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    popularity: 82.0,
    poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    release_date: "2010-07-16",
    title: "Inception",
    video: false,
    vote_average: 8.3,
    vote_count: 22186,
    runtime: 148
},
{
    adult: false,
    backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    genre_ids: [12, 18, 878],
    id: 157336,
    original_language: "en",
    original_title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    popularity: 70.5,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-07",
    title: "Interstellar",
    video: false,
    vote_average: 8.6,
    vote_count: 18000,
    runtime: 169
}
];

describe('CardContainer Component', () => {
  test('renderiza correctamente una película (con slice)', () => {
    render(
      <MemoryRouter>
        <CardContainer
          title="Películas populares"
          layout="popular"
          movies={mockMovies}
          slice={1}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Películas populares')).toBeInTheDocument();
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.queryByText('Interstellar')).not.toBeInTheDocument(); // por slice
  });

  test('muestra loader si isLoading = true', () => {
    render(
      <MemoryRouter>
        <CardContainer title="Cargando..." layout="popular" isLoading={true} />
      </MemoryRouter>
    );

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  test('muestra mensaje de error si se pasa prop error', () => {
    render(
      <MemoryRouter>
        <CardContainer layout="popular" error="Error al cargar datos" />
      </MemoryRouter>
    );

    expect(screen.getByText('Error al cargar datos')).toBeInTheDocument();
  });

  test('muestra todas las películas al hacer clic en el botón', () => {
    render(
      <MemoryRouter>
        <CardContainer
          title="Películas"
          layout="popular"
          movies={mockMovies}
          slice={1}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /All movies/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    // Después del click, ambas películas deberían estar visibles
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
  });
});
