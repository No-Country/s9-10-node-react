import { Outlet } from 'react-router-dom';
import NavbarScreen from '../NavbarScreen/NavbarScreen';
import Aside from '../Aside/Aside';
import Toolbar from '../Toolbar/Toolbar';

const Root = () => {
  return (
    <div className=''>
      <div>
        <NavbarScreen />
      </div>
      <div className='md:flex'>
        <div className='hidden md:block w-60'>
          <Aside />
        </div>
        <div className='w-full'>
          <main className=''>
            <Outlet />
          </main>
        </div>
      </div>
      <div className='fixed bottom-0 w-full md:hidden'>
        <Toolbar />
      </div>
    </div>
  );
};
export default Root;
