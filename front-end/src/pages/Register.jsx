import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';

function Register() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(LoginContext);

  const [isDisabled] = useState(true);

  return (
    <form>
      <h1>Cadastro</h1>
      <GenericInput
        testId="common_register__input-name"
        type="name"
        input={ name }
        name="name"
        placeholder="Seu nome"
        setter={ setName }
        selector="name"
        fieldName="Nome"
      />

      <GenericInput
        testId="common_register__input-email"
        type="email"
        input={ email }
        name="email"
        placeholder="seu-email@site.com.br"
        setter={ setEmail }
        selector="email"
        fieldName="Email"
      />

      <GenericInput
        testId="common_register__input-password"
        type="password"
        input={ password }
        name="senha"
        placeholder="********"
        setter={ setPassword }
        selector="senha"
        fieldName="Senha"
      />

      <Button
        dataTestId="common_register__button-register"
        type="submit"
        name="register"
        disabled={ isDisabled }
        text="Cadastrar"
      />

    </form>
  );
}

export default Register;
