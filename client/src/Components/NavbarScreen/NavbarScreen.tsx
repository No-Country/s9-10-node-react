import { Link } from 'react-router-dom';

const NavbarScreen = () => {
  return (
    <nav className='flex w-full'>
      <ul className='flex w-full h-12 justify-start items-center ml-2 gap-4'>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarScreen;
