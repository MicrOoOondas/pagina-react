import React, {useState} from 'react';

/*const EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{4,}$/i;*/

function ContactForm(){
    const [values,setValues] = useState({nombre:'',email:'',mensaje:''});
    const [touched,setTouched] = useState({nombre:false, email: false,mensaje:false});
    const [submitted,setSubmitted] = useState(false);

    const errors = {
        nombre : values.nombre.trim() === ''?'El nombre es obligatorio':'',
        email : values.email.trim() === ''?'El email es obligatorio':'',
        mensaje : values.mensaje.trim() === '' ? 'EL mensaje es obligatorio':''
    };

    const isValid = (field) => !errors[field];

    const fieldClass = (field) => {
        const show = touched[field] || submitted;
        if(!show) return 'form-control';
        return isValid(field) ? 'form-control is-valid' : 'form-control is-invalid';
    };

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
        <section id="contact" className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="mb-3">Contacto
                        </h2>
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Nombre */}
                            <div className="mb-3">
                                <label htmlFor="nombre" className='form-label'>Nombre: </label>
                                <input type="text" name="nombre" id="nombre" 
                                className={fieldClass('nombre')}
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.nombre || submitted) && errors.nombre && (
                                    <div className="invalid-feedback">{errors.nombre}</div>
                                )}
                                {(touched.nombre || submitted) && !errors.nombre && (
                                    <div className="valid-feedback">Correcto!</div>
                                )}
                            </div>
                            {/*Email*/}
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email: </label>
                                <input type="text" name="email" id="email" 
                                className={fieldClass('email')}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.email || submitted) && errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                                {(touched.email || submitted) && !errors.email && (
                                    <div className="valid-feedback">Correcto!</div>
                                )}
                            </div>
                             {/*Mensaje*/}
                            <div className="mb-3">
                                <label htmlFor="mensaje" className='form-label'>Mensaje: </label>
                                <input rows="4" name="mensaje" id="mensaje" type='textarea'
                                className={fieldClass('mensaje')}
                                value={values.mensaje}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required/>
                                {(touched.mensaje || submitted) && errors.mensaje && (
                                    <div className="invalid-feedback">{errors.mensaje}</div>
                                )}
                                {(touched.mensaje || submitted) && !errors.mensaje && (
                                    <div className="valid-feedback">Correcto!</div>
                                )}
                            </div>
                            <div className="d-grid d-sm-flex gap-3">
                                <button type='submit' className='btn btn-primary btn-lg'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );


    
}
export default ContactForm;