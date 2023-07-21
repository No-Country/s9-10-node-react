import { Suspense, lazy } from 'react';
import { HeadScreen, Loader } from '../../Components';
import { CreateFormsProvider } from './context/CreateFormsProvider';
import { ScoringScaleScreen } from './components';

const EmptyQuestionScreen = lazy(
  () => import('./components/EmptyQuestionScreen/EmptyQuestionScreen')
);
const MenuButtons = lazy(() => import('./components/MenuButtons/MenuButtons'));
const OneOptionScreen = lazy(
  () => import('./components/OneOptionScreen/OneOptionScreen')
);
const OpenEndedQuestion = lazy(
  () => import('./components/Open-EndedQuestion/OpenEndedQuestion')
);
const OptionsButtons = lazy(
  () => import('./components/OptionsButtons/OptionsButtons')
);
const TitleScreen = lazy(() => import('./components/TitleScreen/TitleScreen'));

function CreateForms() {
  return (
    <Suspense fallback={<Loader />}>
      <CreateFormsProvider>
        <HeadScreen title='Crear Formularios' />
        <article className='md:ml-40 relative'>
          <div className='w-full h-[4.3125rem] bg-[#E9ECFC] absolute -top-5 left-0 rounded-b-2xl md:hidden -z-20' />
          <TitleScreen />
          <MenuButtons />
          <OptionsButtons />
          <div
            className={`flex flex-col w-[21rem] min-h-[22rem] mt-[1.62rem] rounded-[0.625rem] border-[1px] border-solid border-black mx-auto
        md:w-[57.125rem] md:min-h-[25rem] md:rounded-[1.875rem] md:border-[#A7A7A7] md:mx-0 mb-4`}
          >
            <div
              className={`flex flex-col w-[19rem] min-h-52 rounded-[1.25rem] bg-[#E9ECFC] mx-auto my-4 md:w-[55.125rem] 
          md:min-h-[10rem] `}
            >
              <EmptyQuestionScreen />
              <OneOptionScreen />
              <OpenEndedQuestion />
              <ScoringScaleScreen />
            </div>
          </div>
        </article>
      </CreateFormsProvider>
    </Suspense>
  );
}

export default CreateForms;
