import { v4 as uuid } from 'uuid';
import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Formulario = ({ addCliente }) => {
  // Estado inicial del socio
  const [socio, setSocio] = useState({
    nombre: '',
    dni: ''
  });
  const { nombre, dni } = socio;
  const [error, setError] = useState(false);

  // Actualizacion de los datos frente a cada cambio
  const handlerOnChange = (e) => {
    setSocio({
      ...socio,
      [e.target.name]: e.target.value
    });
  };

  // Envio de los datos del formulario
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    // Validar el fomulario
    // MAS COSAS
    if (nombre.trim() === '' || dni.trim() === '') {
      setError(true);
      return;
    } else {
      setError(false);
    }
    socio.id = uuid();
    addCliente(socio);
    setSocio({
      nombre: '',
      dni: ''
    })
  };

  return (
    <Fragment>
      <Form onSubmit={handlerOnSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            onChange={handlerOnChange}
            value={nombre}
            type="text"
            placeholder="Nombre completo"
            name="nombre"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control
            onChange={handlerOnChange}
            value={dni}
            type="text"
            placeholder="sin puntos ni espacios"
            name="dni"/>
        </Form.Group>
        <Button
          variant="success"
          type="submit">
          Ingresar socio
        </Button>
      </Form>
      { error && <Alert variant="danger">Error</Alert> }
    </Fragment>
  );
}

export default Formulario;
