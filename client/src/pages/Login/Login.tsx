import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import userStore from '../../store/userStore';

const Login = () => {
  const { fetchData, error } = useFetch();
  const addUser = userStore((state) => state.addUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetchData('/users/login', 'POST', { email, password });

    if (error) {
      alert(error);
      return;
    }

    addUser(res);
    alert('Bienvenido');
    clearForm();
    navigate('/');
  };
  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Inicia sesión en tu cuenta
          </h2>
          <p className='mt-2 text-sm text-center text-gray-600 max-w'>
            O{' '}
            <a
              href='#'
              className='font-medium text-blue-600 hover:text-blue-500'
              onClick={() => navigate('/register')}
            >
              Crea una cuenta
            </a>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' action='#' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Ingresa tu email'
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
                    className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Ingresa tu contraseña'
                  ></input>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember_me'
                    name='remember_me'
                    type='checkbox'
                    className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                  ></input>
                  <label className='block ml-2 text-sm text-gray-900'>
                    {' '}
                    Recuérdame{' '}
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-blue-600 hover:text-blue-500'
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 text-gray-500 bg-gray-100'>
                    O continua con
                  </span>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-3 mt-6'>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50'
                  >
                    <img
                      className='w-5 h-5'
                      src='https://www.svgrepo.com/show/512120/facebook-176.svg'
                      alt=''
                    />
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50'
                  >
                    <img
                      className='w-5 h-5'
                      src='https://www.svgrepo.com/show/513008/twitter-154.svg'
                      alt=''
                    />
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                    className='flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50'
                  >
                    <img
                      className='w-6 h-6'
                      src='https://www.svgrepo.com/show/506498/google.svg'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
