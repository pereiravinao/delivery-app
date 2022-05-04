import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { fetchApiRegister } from '../services/fetchApi';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetchApiRegister(name, email, password);
    const ERROR = 409;
    if (result.status === ERROR) {
      setError(true);
    }
    const STATUS_CODE_CREATED = 201;
    if (result.status === STATUS_CODE_CREATED) {
      setError(false);
      navigate('/customer/products');
    }
  };

  const MIN_LENGTH_NAME = 12;
  const MIN_LENGTH_EMAIL = 6;
  const ALERT = (
    <Alert
      key="danger"
      variant="danger"
      className="error"
      data-testid="common_register__element-invalid_register"
    >
      Nome ou email já existentes.
    </Alert>
  );

  return (
    <>
      <Form className="card mt-3 pb-3 pt-1 container-sm w-50">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome completo"
            data-testid="common_register__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_register__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          data-testid="common_register__button-register"
          disabled={
            !(isEmailValid(email)
            && password.length >= MIN_LENGTH_EMAIL
            && name.length >= MIN_LENGTH_NAME)
          }
          className="mt-3"
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
      </Form>
      { error && ALERT }
    </>
  );
};

export default Register;
