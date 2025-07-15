import { http, HttpResponse } from 'msw'; // NUEVO

export const handlers = [
  http.get('https://api.themoviedb.org/3/search/movie', ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');

    if (query === 'nolan') {
      return HttpResponse.json({
        results: [
          {
            id: 1,
            title: 'Inception',
            overview: 'A thief who steals corporate secrets through dreams.',
            poster_path: '/inception.jpg',
            backdrop_path: '/inception_back.jpg',
            release_date: '2010-07-16',
            genre_ids: [28, 878],
            vote_average: 8.8,
          },
          {
            id: 2,
            title: 'Interstellar',
            overview: 'A journey to save mankind.',
            poster_path: '/interstellar.jpg',
            backdrop_path: '/interstellar_back.jpg',
            release_date: '2014-11-07',
            genre_ids: [12, 18],
            vote_average: 8.6,
          },
        ],
      });
    }

    return HttpResponse.json({ results: [] });
  }),
];
