import React from 'react';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import Products from '../Products';
import { renderWithProviders } from '../../utils/test-utils.jsx';
import { products } from '../../data/productos';

// Mock del carrusel 'react-slick' para que no falle en el entorno de testing
vi.mock('react-slick', () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
}));

describe('Componente Products', () => {
  test('debe renderizar los títulos y los productos destacados', () => {
    renderWithProviders(<Products />);

    // Verifica que los títulos principales se muestren
    expect(screen.getByText('TechCore')).toBeInTheDocument();
    expect(screen.getByText('Nuestros Productos Destacados')).toBeInTheDocument();
    expect(screen.getByText('¿Por qué elegir TechCore?')).toBeInTheDocument();

    // Verifica que al menos el primer producto de la lista se renderice
    const firstProduct = products[0];
    expect(screen.getByText(firstProduct.name)).toBeInTheDocument();
  });
});