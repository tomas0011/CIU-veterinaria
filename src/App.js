import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Cliente from './components/Cliente';

const App = () => {
  // Iniciamos nuestro local storage
  let clientesGuardados = JSON.parse(localStorage.getItem('clientes')) || [];

  // Hook de estado facio con los diferentes clientes de la veterinaria
  const [clientes, setClientes] = useState(clientesGuardados);

  // Hook de useEffect para manejar la persistencia
  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes]);

  // Funcion que toma el socio nuevo y lo mete en el array de clientes
  const addCliente = (socio) => {
    setClientes([...clientes, socio]);
  };

  // Funcion para borrar cliente
  const deleteCliente = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col><h1>Usuarios de la veterinaria</h1></Col>
        </Row>
        <Row>
          <Col>
            <Formulario addCliente={addCliente}/>
          </Col>
          <Col>
            <h3>
              {
                clientes.length 
                  ? 'Listado de clientes'
                  : 'Aun no hay clientes'
              }
            </h3>
            {
              clientes.map((cliente) => 
                <Cliente
                  cliente={cliente}
                  deleteCliente={deleteCliente}
                  key={cliente.id}
                />
              )  
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
