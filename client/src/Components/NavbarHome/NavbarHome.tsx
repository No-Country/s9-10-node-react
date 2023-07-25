import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';

const NavbarHome = () => {
  return (

    <nav className='flex justify-between items-center p-5 border-b rounded-b-xl h-20'>
      <div className='flex'>
        <div className=''>
          <Link to={'/user'} className='bg-azulPrimary text-white px-8 py-2 rounded-md'>Logo</Link>
        </div>
        <div className='hidden md:flex gap-6 ml-10 text-lg text-azulPrimary'>
          <Link to={'/'} className=''>Sobre nosotros</Link>
          <Link to={'/'} className=''>Contacto</Link>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:block'>
          <Link to={'/login'} className='bg-orange-100 border border-orange-500 px-4 py-2 text-orange-500 rounded-3xl'>Iniciar sesión</Link>
          <Link to={'/register'} className='bg-orange-500 border border-orange-500 px-4 py-2 text-white rounded-3xl ml-5'>Registrarse</Link>
        </div>
        <div className='md:hidden border-2 p-2 border-azulPrimary rounded-md text-xl'>
          <GrMenu/>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;





// import { Link } from 'react-router-dom';
// import { GrMenu } from 'react-icons/gr';

// const NavbarHome = () => {
//   return (
//     <nav className='flex justify-between items-center p-5 border-b rounded-b-xl h-20'>
//       <div className='flex'>
//         <div>
//           <Link to={'/user'} className='bg-blue-900 text-white px-8 py-2 rounded-md'>Logo</Link>
//         </div>
//         <div className='hidden md:flex gap-6 ml-10'>
//           <Link to={'/'} className=''>Lorem</Link>
//           <Link to={'/'} className=''>Lorem</Link>
//           <Link to={'/'} className=''>Lorem</Link>
//         </div>
//       </div>
//       <div className=''>
//         <button className='hidden md:block'>
//           <Link to={'/login'} className='bg-orange-100 border border-orange-500 px-4 py-2 text-orange-500 rounded-3xl'>Iniciar sesión</Link>
//           <Link to={'/register'} className='bg-orange-500 border border-orange-500 px-4 py-2 text-white rounded-3xl ml-5'>Registrarse</Link>
//         </button>
//         <div className='md:hidden border-2 p-2 border-blue-900 rounded-md text-xl'>
//           <GrMenu/>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarHome;
