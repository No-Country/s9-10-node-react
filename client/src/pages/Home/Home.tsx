import { lazy, Suspense, useEffect } from 'react';
import { HeadScreen, Loader } from '../../Components';
import NavbarHome from '../../Components/NavbarHome/NavbarHome';
import GetToken from '../../libs/getToken';
import { useAuthStore } from '../../store';

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
  const { getToken } = GetToken();
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token === '') getToken();
  }, [token, getToken]);

  return (
    <Suspense fallback={<Loader />}>
      <HeadScreen title='Home' />
      <NavbarHome />
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
