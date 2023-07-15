import {
  EndSectionScreen,
  FunctionalitiesScreen,
  HeadSectionScreen,
  MiddleSectionScreen,
  WhyUsSection,
} from './components';

const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full h-full'>
      <HeadSectionScreen />
      <FunctionalitiesScreen />
      <MiddleSectionScreen />
      <WhyUsSection />
      <EndSectionScreen />
    </main>
  );
};

export default Home;
