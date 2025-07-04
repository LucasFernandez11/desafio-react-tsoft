import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/home';
import MovieDetail from '../pages/movie/MovieDetail';
import SearchPage from '../pages/search/Search';

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
        path: 'movie/:id', // Ruta para detalle de película
        element: <MovieDetail />
      },
      {
        path: '/search', // Ruta para detalle de película
        element: <SearchPage />
      }
    ]
  }
]);

export default router;
