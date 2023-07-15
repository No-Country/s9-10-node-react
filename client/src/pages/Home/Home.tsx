import { lazy, Suspense } from 'react';
import { Loader } from '../../Components';

const EndSectionScreen = lazy(
  () => import('./components/EndSection/EndSectionScreen')
);
const FunctionalitiesScreen = lazy(
  () => import('./components/FunctionalitiesScreen/FunctionalitiesScreen')
);
const HeadSectionScreen = lazy(
  () => import('./components/HeadSectionScreen/HeadSectionScreen')
);
const MiddleSectionScreen = lazy(
  () => import('./components/MiddleSectionScreen/MiddleSectionScreen')
);
const WhyUsSection = lazy(
  () => import('./components/WhyUsSection/WhyUsSection')
);

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <main className='flex flex-col justify-center items-center w-full h-full'>
        <HeadSectionScreen />
        <FunctionalitiesScreen />
        <MiddleSectionScreen />
        <WhyUsSection />
        <EndSectionScreen />
      </main>
    </Suspense>
  );
};

export default Home;
