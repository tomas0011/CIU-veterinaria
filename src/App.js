import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

const App = () => {
  const [clientes, setClientes] = useState([]);

  // Funcion que toma el socio nuevo y lo mete en el array de clientes
  const addCliente = (socio) => {
    setClientes([...clientes, socio]);
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>DNI</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr>
                  <td>{cliente.id}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.dni}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
