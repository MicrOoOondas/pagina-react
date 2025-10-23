import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ChartSection from '../ChartSection';

// Mock de react-chartjs-2 para evitar errores de renderizado de canvas en JSDOM
vi.mock('react-chartjs-2', () => ({
  Bar: () => <canvas data-testid="mock-chart" />,
}));

describe('Componente ChartSection', () => {
  test('debe renderizar el título y el gráfico', () => {
    render(<ChartSection />);

    // Verifica que el título de la sección se renderiza
    expect(screen.getByText('Gráfico de Ventas')).toBeInTheDocument();

    // Verifica que el mock del gráfico está presente
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });
});