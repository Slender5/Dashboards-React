import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AuthForm } from "./Auth.Components";
import { onLogin } from "./auth.api";

const LoginPage = () => {

 const [{username, password}, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      username,
      password
    })

  if (response && response.error){
    setError(response.error);
  }

  }

  return(
    <AuthForm>
      <label htmlFor = "username">Username</label>
      <input placeholder = "Username" value={username} onChange={(event) => setCredentials({
        username: event.target.value,
        password
      })} />
      <label htmlFor="password">Password</label>
      <input placeholder = "Password" type="password" value={password} onChange={(event) => setCredentials({
        username,
        password: event.target.value
      })}/>
      <br/>
      <button type="submit">Login</button>
      {error.length > 0 && <p>{error}</p>}
    </AuthForm>
  );
}

export default LoginPage