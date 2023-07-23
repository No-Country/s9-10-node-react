import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import useFetch from '../../hooks/useFetch';
import userStore from '../../store/userStore';
import { HeadScreen } from '../../Components';
import { isValidEmail } from '../../utils';

const Login = () => {
  const { fetchData, error } = useFetch();
  const addUser = userStore((state) => state.addUser);
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * The function `validateEmail` checks if an email are valid
   * @param {string} email
   * @returns The function `validateInputs` returns a boolean value. It returns `true` if the
   * email input pass the validation checks, and it returns `false` if either the email
   * input fails the validation checks.
   */
  function validateEmail(email: string): boolean {
    const emailRegex = isValidEmail(email);
    if (!emailRegex) {
      messageApi.open({
        type: 'error',
        content: 'El correo ingresado no es válido',
      });
      return false;
    }

    return true;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) return;

    const res = await fetchData('/admin/login', 'POST', { email, password });

    if (error) {
      messageApi.open({
        type: 'error',
        content: error,
      });
      return;
    }

    addUser(res);

    clearForm();
    navigate('/');
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {contextHolder}
      <HeadScreen title='Inicio de Sesión' />
      <div className='flex flex-col justify-center min-h-screen py-12 bg-white sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-3xl font-extrabold text-center text-black'>
            Inicia sesión en tu cuenta
          </h2>
          <p className='mt-2 text-sm text-center text-gray-600 max-w'>
            O{' '}
            <a
              href='#'
              className='font-medium text-[#7A8CEB] hover:text-blue-500'
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
                  Contraseña
                </label>
                <div className='mt-1'>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md 
                    appearance-none focus:outline-none focus:ring-[#CCE8FF] focus:border-[#CCE8FF] focus:z-10 sm:text-sm`}
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
                    className='font-medium text-[#7A8CEB] hover:text-blue-500'
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-[#CCE8FF] bg-[#185D81] 
                  rounded-md group hover:bg-[#CCE8FF] hover:text-[#185D81] transition-colors duration-300`}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <div className='mt-6'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
