import React, {useState} from 'react';
import '../css/ContactForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function ContactForm(){
    const [values,setValues] = useState({nombre:'',email:'',mensaje:''});
    const [touched,setTouched] = useState({nombre:false, email: false,mensaje:false});
    const [submitted,setSubmitted] = useState(false);

    const errors = { // Lógica de validación mejorada
        nombre: values.nombre.trim() === '' ? 'El nombre es obligatorio' : '',
        email: values.email.trim() === '' ? 'El email es obligatorio' : !EMAIL_RE.test(values.email) ? 'El formato del email no es válido' : '',
        mensaje: values.mensaje.trim() === '' ? 'El mensaje es obligatorio' : ''
    };    

    const isValid = (field) => !errors[field];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((v) => ({...v,[name]: value}));
    };

    const handleBlur = (e) => {
        const {name} = e.target;
        setTouched((t) => ({...t,[name]:true}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(isValid('nombre') && isValid('email') && isValid('mensaje')){
            alert('Mensaje enviado correctamente');
            setValues({nombre:'',email:'',mensaje:''});
            setTouched({nombre:false,email:false,mensaje:false});
            setSubmitted(false);
        }


    };

    return(
        <section id="contact-section" style={{ paddingBottom: '40px' }}>
            <div id="contact-container">
                <div id="contact-form-wrapper">
                    <div id="contact-form-container">
                        <h2 id="contact-title">Hablemos</h2>
                        <p id="contact-intro-text">
                            ¿Interesado en colaborar, tienes alguna pregunta sobre nuestros productos o simplemente quieres saludarnos? Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
                        </p>
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Nombre */}
                            <div id="form-group-nombre">
                                <label htmlFor="nombre" id='nombre-label'>
                                    Nombre: {values.nombre.trim() === '' && <span className="required-asterisk">*</span>}
                                </label>
                                <input type="text" name="nombre" id="nombre" 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.nombre || submitted) && errors.nombre && (
                                    <div id="nombre-error">{errors.nombre}</div>
                                )}
                                {(touched.nombre || submitted) && !errors.nombre && (
                                    <div id="nombre-success">Correcto!</div>
                                )}
                            </div>
                            {/*Email*/}
                            <div id="form-group-email">
                                <label htmlFor="email" id='email-label'>
                                    Email: {values.email.trim() === '' && <span className="required-asterisk">*</span>}
                                </label>
                                <input type="text" name="email" id="email" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.email || submitted) && errors.email && (
                                    <div id="email-error">{errors.email}</div>
                                )}
                                {(touched.email || submitted) && !errors.email && (
                                    <div id="email-success">Correcto!</div>
                                )}
                            </div>
                             {/*Mensaje*/}
                            <div id="form-group-mensaje">
                                <label htmlFor="mensaje" id='mensaje-label'>
                                    Mensaje: {values.mensaje.trim() === '' && <span className="required-asterisk">*</span>}
                                </label>
                                <input rows="4" name="mensaje" id="mensaje" type='textarea'
                                value={values.mensaje}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.mensaje || submitted) && errors.mensaje && (
                                    <div id="mensaje-error">{errors.mensaje}</div>
                                )}
                                {(touched.mensaje || submitted) && !errors.mensaje && (
                                    <div id="mensaje-success">Correcto!</div>
                                )}
                            </div>
                            <div id="contact-form-buttons">
                                <button type='submit' id='enviar-btn'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );


    
}
export default ContactForm;