import {render, screen} from '@testing-library/react';
import Navbar from '../Navbar.jsx';

describe('Componente Navbar',() => {
    it('debe contener los enlaces de navegación',() => {
        render(<Navbar/>);
        const linkProductos = screen.getByText(/Productos/i);
        const linkContacto = screen.getByText(/Contacto/i);

        expect(linkProductos).toBeTruthy();
        expect(linkContacto).toBeTruthy();
    })
});