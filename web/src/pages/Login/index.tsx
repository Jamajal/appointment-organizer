import { useState } from 'react';

import AnimatedInput from '../../components/AnimatedInput';
import PrimaryButton from '../../components/PrimaryButton';

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticationMode, setAuthenticationMode] = useState('login');

  const authenticationModeToggle = () => {
    setUser('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setError('');

    if (authenticationMode == 'login') {
      setAuthenticationMode('signup');
      return;
    }

    setAuthenticationMode('login');
  };

  const handleInputFunction = (
    inputType: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (inputType == 'user') {
      setUser(e.target.value);
    } else if (inputType == 'email') {
      setEmail(e.target.value);
    } else if (inputType == 'password') setPassword(e.target.value);
    else if (inputType == 'confirmPassword') setConfirmPassword(e.target.value);

    setError('');
  };

  const handleLoginSubmit = () => {
    if (!user) {
      setError('Favor informar nome de usuário!');
      return;
    }

    if (!password) {
      setError('Favor informar a senha!');
      return;
    }

    console.log(user);
    console.log(password);
  };

  const handleSignupSubmit = () => {
    if (!user) {
      setError('Favor informar nome de usuário!');
      return;
    }

    if (!password) {
      setError('Favor informar a senha!');
      return;
    }

    console.log(user);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r sm:bg-gradient-to-b md:bg-gradient-to-b from-purple-400 to-blue-950">
      <div className="w-2/6 sm:w-4/6 md:w-4/6 flex flex-col items-center gap-2 sm:gap-1 md:gap-1 py-6 px-8 rounded bg-white shadow-md shadow-gray-700">
        <div className="text-center mb-2">
          <h1 className="text-2xl sm:text-xl md:text-xl font-bold">
            Organizador de Reuniões
          </h1>
          <h2 className="text-xl sm:text-lg md:text-lg">
            {authenticationMode == 'login'
              ? 'Faça seu login aqui!'
              : 'Cadastra-se para utilizar a plataforma!'}
          </h2>
        </div>

        {authenticationMode == 'login' ? (
          <div className="w-full flex flex-col gap-2">
            <AnimatedInput
              label="Usuário"
              type="text"
              id="user"
              content={user}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('user', e)
              }
            />
            <AnimatedInput
              label="Senha"
              type="password"
              id="password"
              content={password}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('password', e)
              }
            />
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2">
            <AnimatedInput
              label="Usuário"
              type="text"
              id="user"
              content={user}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('user', e)
              }
            />
            <AnimatedInput
              label="Email"
              type="text"
              id="email"
              content={email}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('email', e)
              }
            />
            <AnimatedInput
              label="Senha"
              type="password"
              id="password"
              content={password}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('password', e)
              }
            />
            <AnimatedInput
              label="Confirme sua senha"
              type="password"
              id="confirm-password"
              content={confirmPassword}
              elementFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputFunction('confirmPassword', e)
              }
            />
          </div>
        )}
        <div className="flex flex-col items-center gap-2 sm:gap-1">
          <p className="h-5 sm:h-4 md:h-4 text-sm sm:text-xs text-red-500">
            {error}
          </p>
          <PrimaryButton
            buttonMessage={
              authenticationMode == 'login' ? 'Entrar' : 'Cadastrar'
            }
            buttonFunction={
              authenticationMode == 'login'
                ? handleLoginSubmit
                : handleSignupSubmit
            }
          />
          {authenticationMode == 'login' ? (
            <p className="text-center sm:text-sm md:text-sm">
              Não tem uma conta?{' '}
              <strong
                className="text-purple-500 cursor-pointer"
                onClick={authenticationModeToggle}
              >
                Cadastre-se
              </strong>
            </p>
          ) : (
            <p>
              Já possui uma conta?{' '}
              <strong
                className="text-purple-500 cursor-pointer"
                onClick={authenticationModeToggle}
              >
                Login
              </strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
