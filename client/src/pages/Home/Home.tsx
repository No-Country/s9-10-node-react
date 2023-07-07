import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
const user = useAuthStore.getState().user;
const isLogged = useAuthStore.getState().isLogged;
const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='flex flex-col justify-center items-center w-full h-screen overflow-y-hidden'>
      <h1 className='text-4xl font-bold text-center'>
        Bienvenidos al Feedback App {user?.id}
        LOGIN IS {isLogged()? "TRUE" : "FALSE"}
      </h1>
      {/* en vue uso v-if o v-show pero aqui no se como usar */}
      {
        isLogged() &&
          <button
          className='bg-blue-500 text-white p-2 rounded-md mt-5 px-4 py-2'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      }
      
    </main>
  );
};

export default Home;
