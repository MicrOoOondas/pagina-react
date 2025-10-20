import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import MainLayout from '../components/MainLayout';

const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, {
    wrapper: ({ children }) => (
      <Router>
        <CartProvider>
          {children}
        </CartProvider>
      </Router>
    ),
  });
};

export { renderWithProviders };