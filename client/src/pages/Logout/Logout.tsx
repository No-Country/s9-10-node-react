import { useEffect } from 'react';
import { logoutRequest } from "../../api/auth";

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      try {
        const res = await logoutRequest();
        console.log(res); // Manejar la respuesta según tus necesidades
      } catch (error) {
        console.log(error); // Manejar el error según tus necesidades
      }
    };

    logout();
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;

