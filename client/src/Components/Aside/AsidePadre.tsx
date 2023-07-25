import { useState } from 'react';

import Aside from './Aside'; // Importa el componente Aside
import AsideColapsado from './AsideColapsado'; // Importa el componente AsideColapsado

interface AsidePadreProps {
  handleLogout: () => void;
}

const AsidePadre: React.FC<AsidePadreProps> = ({ handleLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Estado para verificar si el usuario ha iniciado sesión o no

  const handleLogoutClick = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false); // Establecer el estado de inicio de sesión en falso al cerrar sesión
    handleLogout(); // Llamar a la función handleLogout pasada como prop desde el componente padre
  };

  return (
    <div>
      {/* Renderizar el componente Aside o AsideColapsado según el estado de inicio de sesión */}
      {isLoggedIn ? (
        <Aside handleLogout={handleLogoutClick} />
      ) : (
        <AsideColapsado handleLogout={handleLogoutClick} />
      )}
    </div>
  );
};

export default AsidePadre;