import { Outlet } from 'react-router-dom';
import NavbarScreen from '../NavbarScreen/NavbarScreen';
import Aside from '../Aside/Aside';
import Toolbar from '../Toolbar/Toolbar';

const Root = () => {
  return (
    <div>
      <NavbarScreen />

      <div className="md:flex">
        <div className="hidden md:block">
          <Aside />
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
