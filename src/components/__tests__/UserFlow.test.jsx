import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { vi } from 'vitest';
import App from '../../App';
import { renderWithProviders } from '../../utils/test-utils.jsx';

// Mock para simular que el usuario está autenticado
vi.mock('../ProtectedRoute', () => ({ children }) => <>{children}</>);

describe('Flujo de Compra Completo', () => {
  const user = userEvent.setup();
  test('un usuario puede agregar un producto, verlo en el carrito y eliminarlo', async () => {
    renderWithProviders(<App />, { initialEntries: ['/productos'] });

    // 1. Agregar un producto al carrito desde la página de productos
    const addToCartButtons = await screen.findAllByRole('button', { name: /agregar al carro/i });
    await user.click(addToCartButtons[0]); // Clic en el primer producto

    // 2. Verificar que el contador del carrito en el Navbar se actualiza a "1"
    const cartBadge = await screen.findByText('1');
    expect(cartBadge).toBeInTheDocument();

    // 3. Navegar a la página del carrito
    const cartLink = screen.getByRole('link', { name: /carrito/i });
    await user.click(cartLink);

    // 4. Verificar que el producto está en el carrito
    const productNameInCart = await screen.findByText('Samsung Galaxy S24 Ultra');
    expect(productNameInCart).toBeInTheDocument();

    // 5. Aumentar la cantidad del producto
    const increaseButton = screen.getByRole('button', { name: '+' });
    await user.click(increaseButton);
    const quantityDisplay = await screen.findByText('2');
    expect(quantityDisplay).toBeInTheDocument();

    // 6. Disminuir la cantidad del producto
    const decreaseButton = screen.getByRole('button', { name: '-' });
    await user.click(decreaseButton);
    expect(await screen.findByText('1')).toBeInTheDocument();

    // 7. Intentar disminuir de nuevo para activar el modal de confirmación
    await user.click(decreaseButton);

    // 8. Verificar que el modal aparece
    const modalTitle = await screen.findByText('¿Estás seguro?');
    expect(modalTitle).toBeInTheDocument();
    expect(screen.getByText(/¿Estás seguro de que quieres eliminar "Samsung Galaxy S24 Ultra" del carrito?/i)).toBeInTheDocument();

    // 9. Hacer clic en "Continuar" para eliminar el producto
    const confirmButton = screen.getByRole('button', { name: /continuar/i });
    await user.click(confirmButton);

    // 10. Verificar que el carrito ahora está vacío
    await waitFor(() => {
      expect(screen.getByText('Tu carrito está vacío.')).toBeInTheDocument();
    });

    // 11. (Opcional) Verificar que el contador del carrito en el Navbar ha desaparecido
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });
});