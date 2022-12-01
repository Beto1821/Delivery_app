import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;
  const [isDisabled] = useState(false);

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  return (
    <form>
      <GenericInput
        testId="common_login__input-email"
        type="email"
        input={ email }
        name="Login"
        placeholder="example@example.com"
        setter={ setEmail }
      />

      <GenericInput
        testId="common_login__input-password"
        type="password"
        input={ password }
        name="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />

      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        disabled={ disabledBtn() }
        text="Login"
      />
      <Button
        dataTestId="common_login__button-register"
        type="submit"
        name="register"
        disabled={ isDisabled }
        text="Ainda não tenho conta"
      />
    </form>
  );
}

export default Login;
