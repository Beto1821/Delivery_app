import React, { useState } from 'react';
import Button from '../components/Button';
import Genericinput from '../components/Input';
import LoginContext from '../context/LoginContext';

function Login() {
const { email, setEmail, password, setPassword } = useContext(LoginContext);

  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <form>
      <Genericinput
        type="email"
        selector="email"
        fieldName="Login"
        placeholder="exmple@exemplo.com"
        setter={ setEmail }
      />

      <Genericinput
        type="password"
        selector="password"
        fieldName="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />
      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        disabled={ isDisabled }
        text="Login"
      />
    </form>
  );
}

export default Login;
