import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert } from 'react-bootstrap';

const loginForm = props => (
  <Form onSubmit={props.submit}>
    <h3 className="text-center">Iniciar sesion</h3>
    {props.loginFailed && (
      <Alert variant="danger">
        <small>
          <strong>¡Hay un error! :(</strong>
        </small>
        <p>
          Datos incorrectos
          <span>
            <small> Por favor, vuelve a intentarlo...</small>
          </span>
        </p>
      </Alert>
    )}
    <Form.Group controlId="email">
      <Form.Label>Correo electrónico</Form.Label>
      <Form.Control
        value={props.data.email}
        onChange={props.handleEmailChange}
        type="email"
        placeholder="Enter email"
        required
      />
      <Form.Text className="text-muted">
        Nosotros nunca compartiremos su correo con otros.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="pass">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control
        value={props.data.pass}
        onChange={props.handlePassChange}
        type="password"
        placeholder="Contraseña"
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit" block>
      Ingresar
    </Button>
  </Form>
);

loginForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePassChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loginFailed: PropTypes.bool.isRequired
};

export default loginForm;
