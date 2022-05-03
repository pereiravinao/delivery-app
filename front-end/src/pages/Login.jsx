import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { fetchApi } from '../services/fetchApi';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

const handleClick = async (event) => {
  event.preventDefault();
  const result = await fetchApi(email, password);
  if (result.status === 404) {
    setError(true);
  }
}

const MIN_LENGTH = 6;

  return (
    <>
      <Form className="card mt-3 pb-3 pt-1 container-sm w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            data-testid="common_login__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !(isEmailValid(email) && password.length >= MIN_LENGTH) }
          className="mt-3"
          onClick={ handleClick }
        >
          Login
        </Button>
        <Button
          variant="outline-primary"
          type="submit"
          data-testid="common_login__button-register"
          className="mt-3"
        >
          Ainda não tenho conta
        </Button>
      </Form>
      { error && <Alert
        key="danger"
        variant="danger"
        className="error"
        data-testid="common_login__element-invalid-email"
      >
        Login ou senha incorretos.
      </Alert>
      }
    </>
  );
};

export default Login;
