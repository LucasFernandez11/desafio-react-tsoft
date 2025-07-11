import type { Meta, StoryObj } from '@storybook/react';
import MovieDetailView from './MovieDetailView';
import type { MovieDetailsResponse } from '../../types/Movie';

const meta: Meta<typeof MovieDetailView> = {
  title: 'Pages/MovieDetailView',
  component: MovieDetailView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const mockMovie: MovieDetailsResponse = {
    id: 1,
    title: 'Inception',
    original_title: 'Inception',
    overview: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos...',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    poster_path: '/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg',
    vote_average: 8.3,
    vote_count: 22100,
    genres: [
        { id: 1, name: 'Ciencia Ficción' },
        { id: 2, name: 'Acción' },
    ],
    runtime: 148,
    status: 'Released',
    release_date: '2010-07-16',
    original_language: 'en',
    budget: 160000000,
    revenue: 829895144,
    homepage: 'https://www.inceptionmovie.com/',
    production_companies: [
        {
            id: 1,
            name: 'Syncopy',
            logo_path: null,
            origin_country: 'GB',
        },
        {
            id: 2,
            name: 'Legendary Pictures',
            logo_path: null,
            origin_country: 'US',
        },
    ],
    production_countries: [
        { iso_3166_1: 'US', name: 'Estados Unidos' },
    ],
    belongs_to_collection: null,
    imdb_id: null,
    spoken_languages: [],
    tagline: null,
    adult: false,
    popularity: 0,
    video: false
};

type Story = StoryObj<typeof MovieDetailView>;

export const Default: Story = {
  args: {
    movie: mockMovie,
    onBack: () => alert('Volver atrás (simulado)'),
  },
};
