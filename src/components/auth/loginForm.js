import React from 'react';
import { Form, Button } from 'react-bootstrap';

const loginForm = (props) => (
  <Form onSubmit={props.submit}>
    <Form.Group controlId="email">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        value={props.data.email}
        onChange={props.handleEmailChange} 
        type="email" 
        placeholder="Enter email" 
        required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="pass">
      <Form.Label>Password</Form.Label>
      <Form.Control
        value={props.data.pass}
        onChange={props.handlePassChange} 
        type="password" 
        placeholder="Password" 
        required/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
 );

export default loginForm;