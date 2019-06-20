import React from 'react';
import { Form, Button } from 'react-bootstrap';

const loginForm = (props) => (
  <Form onSubmit={props.submit}>
    <h3>Iniciar sesion</h3>
    <Form.Group controlId="email">
      <Form.Label>Correo electrónico</Form.Label>
      <Form.Control
        value={props.data.email}
        onChange={props.handleEmailChange} 
        type="email" 
        placeholder="Enter email" 
        required/>
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
        required/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Ingresar
    </Button>
  </Form>
 );

export default loginForm;