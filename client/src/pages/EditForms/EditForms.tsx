import { HeadScreen } from '../../Components';
import { TitleScreen } from '../CreateForms/components';
import { Buttons } from './components';

function EditForms() {
  return (
    <>
      <HeadScreen title='Crear Formularios' />
      <article className='md:ml-40 relative'>
        <div className='w-full h-[4.3125rem] bg-[#E9ECFC] absolute -top-5 left-0 rounded-b-2xl md:hidden -z-20' />
        <TitleScreen title='Crear Formularios' showSubtitle={false} />
        <hr className='hidden md:flex bg-black w-[56rem] h-[0.0625rem] mt-6' />
        <Buttons />
        <div
          className={`flex flex-col w-[21rem] min-h-[22rem] mt-[1.62rem] rounded-[0.625rem] border-[1px] border-solid border-black mx-auto
        md:w-[57.125rem] md:min-h-[25rem] md:rounded-[1.875rem] md:border-[#A7A7A7] md:mx-0 mb-4`}
        ></div>
      </article>
    </>
  );
}

export default EditForms;
