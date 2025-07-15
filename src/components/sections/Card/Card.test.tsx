import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

const defaultProps = {
  id: 123,
  title: 'Matrix Reloaded',
  imagePath: '/matrix.jpg',
  popularity: 7.9,
  release_date: '2003-05-15',
  original_language: 'en',
};

describe('Card Component', () => {
  test('renderiza correctamente layout popular', () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} layout="popular" genres={['Action', 'Sci-Fi']} />
      </MemoryRouter>
    );

    expect(screen.getByText('Matrix Reloaded')).toBeInTheDocument();
    expect(screen.getByText('Action / Sci-Fi')).toBeInTheDocument();
    expect(screen.getByText('7.9')).toBeInTheDocument();
  });

  test('renderiza correctamente layout continue con descripción', () => {
    render(
      <MemoryRouter>
        <Card
          {...defaultProps}
          layout="continue"
          description="Neo fights agents"
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Matrix Reloaded')).toBeInTheDocument();
    expect(screen.getByText('EN • 2003')).toBeInTheDocument();
    expect(screen.getByText('Neo fights agents')).toBeInTheDocument();
  });

  test('renderiza correctamente layout trailer con año', () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} layout="trailer" />
      </MemoryRouter>
    );

    expect(screen.getByText('2003')).toBeInTheDocument();
  });

  test('renderiza correctamente layout single con link', () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} layout="single" />
      </MemoryRouter>
    );

    expect(screen.getByText('Matrix Reloaded')).toBeInTheDocument();
    expect(screen.getByText('2003 • EN')).toBeInTheDocument();
  });
});
