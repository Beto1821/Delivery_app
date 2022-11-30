import React, { useState } from 'react';
import Button from '../components/Button';
import LoginContext from '../context/LoginContext';

function Login() {
  // const { email, setEmail, password, setPassword } = useContext(LoginContext);

  const [isDisabled] = useState(true);

  return (
    <form>
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
