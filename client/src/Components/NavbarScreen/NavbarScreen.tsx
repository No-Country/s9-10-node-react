import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { MdOutlineNotificationsNone } from 'react-icons/md';

const NavbarScreen = () => {
  return (
    <nav className='flex justify-between items-center p-5 border-b rounded-b-xl h-20'>
      <div className='flex'>
        <div>
          <Link to={'/'} className='bg-blue-900 text-white px-8 py-2 rounded-md'>Logo</Link>
        </div>
        <div className='hidden md:flex gap-6 ml-10'>
          <Link to={'/'} className=''>Lorem</Link>
          <Link to={'/'} className=''>Lorem</Link>
          <Link to={'/'} className=''>Lorem</Link>
        </div>
      </div>
      <div className=''>
        <button className='hidden md:block bg-orange-400 text-white p-3 rounded-full text-2xl'>
          <MdOutlineNotificationsNone/>
        </button>
        <div className='md:hidden border-2 p-2 border-blue-900 rounded-md text-xl'>
          <GrMenu/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarScreen;
