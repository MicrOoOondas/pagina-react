import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { vi } from 'vitest';
import ContactForm from '../ContactForm';
import { renderWithProviders } from '../../utils/test-utils.jsx';

describe('ContactForm', () => {
  const user = userEvent.setup();

  // Mock del alert para que no interrumpa los tests
  beforeAll(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('muestra errores de validación si los campos están vacíos al enviar', async () => {
    renderWithProviders(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitButton);

    // Verifica que los mensajes de error aparecen
    expect(await screen.findByText('El nombre es obligatorio')).toBeInTheDocument();
    expect(screen.getByText('El email es obligatorio')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
  });

  test('muestra error si el formato del email no es válido', async () => {
    renderWithProviders(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'correo-invalido');
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitButton);

    expect(await screen.findByText('El formato del email no es válido')).toBeInTheDocument();
  });

  test('envía el formulario correctamente con datos válidos', async () => {
    renderWithProviders(<ContactForm />);

    await user.type(screen.getByLabelText(/nombre/i), 'Jesús');
    await user.type(screen.getByLabelText(/email/i), 'jesus@test.com');
    await user.type(screen.getByLabelText(/mensaje/i), 'Este es un mensaje de prueba.');
    await user.click(screen.getByRole('button', { name: /enviar/i }));

    expect(window.alert).toHaveBeenCalledWith('Mensaje enviado correctamente');
  });
});