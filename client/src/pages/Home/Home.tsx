import {
  FunctionalitiesScreen,
  HeadSectionScreen,
  MiddleSectionScreen,
} from './components';

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-full'>
      <HeadSectionScreen />
      <FunctionalitiesScreen />
      <MiddleSectionScreen />
    </main>
  );
};

export default Home;
