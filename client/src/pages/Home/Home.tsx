import { FunctionalitiesScreen, HeadSectionScreen } from './components';

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-full'>
      <HeadSectionScreen />
      <FunctionalitiesScreen />
    </main>
  );
};

export default Home;
