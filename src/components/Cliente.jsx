import React, { Fragment } from 'react';
import { Badge, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';

const Cliente = ({cliente, deleteCliente}) => {
  return (
    <Fragment>
      <Badge variant="secondary">
        <p>Nombre: {cliente.nombre}</p>
        <p>DNI: {cliente.dni}</p>
        <Button
          onClick={() => deleteCliente(cliente.id)}
          className="bg-danger"
          variant="outline-light"
        >
          <Icon
            path={mdiTrashCanOutline}
            size={1}
          />
        </Button>
      </Badge>
    </Fragment>
  );
}

export default Cliente;
