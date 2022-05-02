import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../style/Login.css';

const Login = () => (
  <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="email" placeholder="Enter email" data-testid="common_login__input-email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" data-testid="common_login__input-password" />
      </Form.Group>
      <Button variant="primary" type="submit" data-testid="common_login__button-login">
        Login
      </Button>
      <Button variant="outline-primary" type="submit" data-testid="common_login__button-register">
        Ainda não tenho conta
      </Button>
    </Form>
    <Alert key='danger' variant='danger' className="error" data-testid="common_login__element-invalid-email">
      Mensagem de erro.
    </Alert>
  </div >
);

export default Login;
