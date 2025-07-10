import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/home';
import MovieDetail from '../pages/movie/MovieDetail';
import SearchPage from '../pages/search/Search';
import TVShow from '../pages/tv/TVShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />
      },
      { 
        path: "/tv-show", 
        element: <TVShow /> 
      },
      {
        path: '/search', 
        element: <SearchPage />
      }
    ]
  }
]);

export default router;
