import { useAuthStore } from '../store/auth';

function GetToken() {
  const tokenStore = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);

  const getToken = async () => {
    if (tokenStore !== '') return;

    const cookies = document.cookie;
    const cookieArray = cookies.split(';'); // Dividir las cookies en un array

    let token = '';
    cookieArray.forEach((cookie) => {
      const [name, value] = cookie.trim().split('='); // Obtener nombre y valor de cada cookie
      if (name === 'token') {
        token = value; // Asignar el valor del token si el nombre coincide
      }
    });

    setToken(token);
  };

  return { getToken };
}

export default GetToken;
