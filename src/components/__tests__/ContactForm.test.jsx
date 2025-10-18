import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe('Componente ContactForm',()=>{
    it('Debe limpiar los campos después de enviar form exitoso',() => {
        render(<ContactForm/>);

        const nombre = screen.getByLabelText(/Nombre/i);
        const email = screen.getByLabelText(/Email/i);
        const mensaje = screen.getByLabelText(/Mensaje/i);
        const boton = screen.getByRole('button',{name:/Enviar/i});

        fireEvent.change(nombre,{target:{value:'Juan'}});
        fireEvent.change(email,{target:{value:'juan@mail.com'}});
        fireEvent.change(mensaje,{target:{value:'Hola'}});
        fireEvent.click(boton);

        expect(nombre.value).toBe('');
        expect(email.value).toBe('');
        expect(mensaje.value).toBe('');


    });
});