import { MenuButtons, OptionsButtons, TitleScreen } from './components';

function CreateForms() {
  return (
    <article className='md:ml-40 relative'>
      <div className='w-full h-[4.3125rem] bg-[#E9ECFC] absolute -top-5 left-0 rounded-b-2xl md:hidden -z-20' />
      <TitleScreen />
      <MenuButtons />
      <OptionsButtons />
    </article>
  );
}

export default CreateForms;
