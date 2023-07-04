import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='text-4xl font-bold text-center'>
        Bienvenidos al Feedback App
      </h1>
      <button
        className='bg-blue-500 text-white p-2 rounded-md mt-5 px-4 py-2'
        onClick={() => navigate('/feedback')}
      >
        Login
      </button>
    </main>
  );
};

export default Home;
