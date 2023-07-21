import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { HeadScreen } from '../../Components';

const Register = () => {
  const navigate = useNavigate();
  const { fetchData, error } = useFetch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetchData('/users/register', 'POST', {
      email,
      username,
      password,
    });

    if (error) {
      alert(error);
      return;
    }

    navigate('/login');
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <HeadScreen title='Registro de Usuarios' />
      <div className='flex flex-col justify-center min-h-screen py-12 bg-white sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-3xl font-extrabold text-center text-black'>
            Registrate
          </h2>
          <p className='mt-2 text-sm text-center text-gray-600 max-w'>
            Si ya tienes cuenta{' '}
            <a
              href='#'
              className='font-medium text-[#7A8CEB] hover:text-blue-500'
              onClick={() => navigate('/register')}
            >
              Inicia sesión
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' action='#' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Correo electrónico
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md 
                    appearance-none focus:outline-none focus:ring-[#CCE8FF] focus:border-[#CCE8FF] focus:z-10 sm:text-sm`}
                    placeholder='Ingresa tu email'
                  ></input>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Nombre de usuario
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md 
                    appearance-none focus:outline-none focus:ring-[#CCE8FF] focus:border-[#CCE8FF] focus:z-10 sm:text-sm`}
                    placeholder='Ingresa tu nombre de usuario'
                  ></input>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Contraseña
                </label>
                <div className='mt-1'>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md 
                    appearance-none focus:outline-none focus:ring-[#CCE8FF] focus:border-[#CCE8FF]00 focus:z-10 sm:text-sm`}
                    placeholder='Ingresa tu contraseña'
                  ></input>
                </div>
              </div>

              <div className='flex items-center justify-between'></div>

              <div>
                <button
                  type='submit'
                  className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-[#CCE8FF] bg-[#185D81] 
                  rounded-md group hover:bg-[#CCE8FF] hover:text-[#185D81] transition-colors duration-300 focus:outline-none`}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
