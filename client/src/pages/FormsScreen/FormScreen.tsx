import { useNavigate } from 'react-router-dom';
import { HeadScreen, SearchBoxScreen } from '../../Components';
import { useScreenSize } from '../../hooks';
import { SliderScreen } from './components';

function FormScreen() {
  const { width } = useScreenSize();
  const navigate = useNavigate();

  return (
    <>
      <HeadScreen title='Gestionar Formularios' />
      <article className='md:ml-40 relative'>
        <div className='w-full h-[4.3125rem] bg-[#E9ECFC] absolute -top-5 left-0 rounded-b-2xl md:hidden -z-20' />
        <SearchBoxScreen
          handleSearch={(search: string) => console.log(search)}
          showButton={false}
          showSelect={true}
          label='Formularios'
        />
        <div className='relative overflow-hidden w-full h-full my-8'>
          <SliderScreen />
          <button
            className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#73C36F] fixed bottom-[5.94rem] right-4 text-white 
        text-4xl font-bold md:absolute md:top-0 md:left-0 md:w-[14rem] md:h-12 md:text-lg md:leading-8 md:tracking-[-0.01125rem]`}
            onClick={() => navigate('/user/forms/create')}
          >
            {width < 768 ? '+' : '+ Crear formulario'}
          </button>
        </div>
      </article>
    </>
  );
}

export default FormScreen;
