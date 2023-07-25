import { Outlet } from 'react-router-dom';
import NavbarScreen from '../NavbarScreen/NavbarScreen';
import Toolbar from '../Toolbar/Toolbar';
import AsidePadre from '../Aside/AsidePadre';

const Root = () => {
  const handleLogout = () => {
    // Lógica para cerrar sesión
    // Por ejemplo, eliminar el token de sesión o realizar una llamada a la API para cerrar sesión
  };
  return (
    <div>
      <NavbarScreen />

      <div className="md:flex mb-20 md:mb-0">
        <div className="hidden md:block">
          <AsidePadre handleLogout={handleLogout} />
        </div>
        <main className="w-full">
          <Outlet />
        </main>
      </div>

      <Toolbar />
    </div>
  );
};
export default Root;
