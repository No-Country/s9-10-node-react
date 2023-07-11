import { Outlet } from 'react-router-dom';
import { NavbarScreen } from '..';
import Aside from '../Aside/Aside';
import Toolbar from '../Toolbar/Toolbar';

const Root = () => {
    return (
        <div className=''>
            <div>
                <NavbarScreen/>
            </div>
            <div className='md:flex'>
                <div className='hidden md:block w-60'>
                    <Aside/>
                </div>
                <div>
                    <main className=''>
                        <Outlet />
                    </main>
                    <footer>
                        <p>Footer</p>
                    </footer>
                </div>
            </div>
            <div className='fixed w-full bottom-0 md:hidden'>
                <Toolbar/>
            </div>
        </div>
    );
};
export default Root;
