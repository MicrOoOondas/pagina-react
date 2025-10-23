import { screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { renderWithProviders } from '../../utils/test-utils.jsx';

describe('Componente Navbar',() => {
    it('debe contener los enlaces de navegación',() => {
        renderWithProviders(<Navbar/>);
        const linkProductos = screen.getByText(/Productos/i);
        const linkContacto = screen.getByText(/Contacto/i);

        expect(linkProductos).toBeInTheDocument();
        expect(linkContacto).toBeInTheDocument();
    })
});