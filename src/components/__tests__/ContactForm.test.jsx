import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../components/ContactForm';
import { renderWithProviders } from '../utils/test-utils';

describe('ContactForm', () => {
  // Mock del alert para que no interrumpa los tests
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('muestra errores de validación si los campos están vacíos al enviar', async () => {
    renderWithProviders(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    // Verifica que los mensajes de error aparecen
    expect(await screen.findByText('El nombre es obligatorio')).toBeInTheDocument();
    expect(screen.getByText('El email es obligatorio')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es obligatorio')).toBeInTheDocument();
  });

  test('muestra error si el formato del email no es válido', async () => {
    renderWithProviders(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'correo-invalido');
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    expect(await screen.findByText('El formato del email no es válido')).toBeInTheDocument();
  });

  test('envía el formulario correctamente con datos válidos', async () => {
    renderWithProviders(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/nombre/i), 'Jesús');
    await userEvent.type(screen.getByLabelText(/email/i), 'jesus@test.com');
    await userEvent.type(screen.getByLabelText(/mensaje/i), 'Este es un mensaje de prueba.');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(window.alert).toHaveBeenCalledWith('Mensaje enviado correctamente');
  });
});