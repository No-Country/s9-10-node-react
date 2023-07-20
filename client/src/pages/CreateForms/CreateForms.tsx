import { useState } from 'react';
import { MenuButtons, OptionsButtons, TitleScreen } from './components';
import { useScreenSize } from '../../hooks';

const DEFAULTRADIOBUTTONS = [
  {
    id: 1,
    title: 'Opción',
  },
  {
    id: 2,
    title: 'Opción',
  },
];

function CreateForms() {
  const { width } = useScreenSize();
  const [showOneOptionDiv, setShowOneOptionDiv] = useState(false);
  const [radioButtons, setRadioButtons] = useState(DEFAULTRADIOBUTTONS);

  function addRadioButtons() {
    setRadioButtons((prevRadioButtons) => [
      ...prevRadioButtons,
      { id: prevRadioButtons.length + 1, title: 'Opción' },
    ]);
  }

  return (
    <article className='md:ml-40 relative'>
      <div className='w-full h-[4.3125rem] bg-[#E9ECFC] absolute -top-5 left-0 rounded-b-2xl md:hidden -z-20' />
      <TitleScreen />
      <MenuButtons setShowOneOptionDiv={setShowOneOptionDiv} />
      <OptionsButtons />
      <div
        className={`flex flex-col w-[21rem] min-h-[22rem] mt-[1.62rem] rounded-[0.625rem] border-[1px] border-solid border-black mx-auto
        md:w-[57.125rem] md:min-h-[40rem] md:rounded-[1.875rem] md:border-[#A7A7A7] md:mx-0`}
      >
        {showOneOptionDiv ? (
          <div
            className={`flex flex-col w-[19rem] min-h-52 rounded-[1.25rem] bg-[#E9ECFC] mx-auto my-4 md:w-[55.125rem] 
          md:min-h-[20rem] `}
          >
            <div className='flex w-full items-center justify-center mt-4 gap-2 md:mt-6'>
              <input
                type='text'
                placeholder='Escriba su pregunta'
                className={`w-60 h-6 bg-white rounded-[0.625rem] px-2 md:w-[49.8125rem] md:h-9 text-base font-normal leading-6 tracking-[-0.022rem] text-[#0000007f] md:text-xl md:leading-7 md:tracking-[-0.0275rem]`}
              />
              <button className='flex items-center justify-center bg-white w-6 h-6 rounded-full shadow-md md:w-9 md:h-9'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L6.46967 16.4697ZM12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L12.5303 12.5303ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L11.4697 11.4697ZM17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L17.5303 7.53033ZM12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L12.5303 11.4697ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L7.53033 6.46967ZM7.53033 17.5303L12.5303 12.5303L11.4697 11.4697L6.46967 16.4697L7.53033 17.5303ZM12.5303 12.5303L17.5303 7.53033L16.4697 6.46967L11.4697 11.4697L12.5303 12.5303ZM11.4697 12.5303L16.4697 17.5303L17.5303 16.4697L12.5303 11.4697L11.4697 12.5303ZM12.5303 11.4697L7.53033 6.46967L6.46967 7.53033L11.4697 12.5303L12.5303 11.4697Z'
                    fill='#2085B0'
                  />
                </svg>
              </button>
            </div>
            <div className='order-1 md:order-2'>
              {radioButtons.map((radioButton) => (
                <div
                  key={radioButton.id}
                  className={`flex items-center justify-start gap-4 ml-4 mt-5 md:mb-5 md:ml-6`}
                >
                  <input type='radio' name='one' />
                  <input
                    type='text'
                    placeholder={`${radioButton.title} ${radioButton.id}`}
                    className={`bg-transparent text-black text-base font-normal leading-6 tracking-[-0.022rem] md:text-xl md:leading-7
                    md:tracking-[-0.0275rem]`}
                  />
                </div>
              ))}
            </div>
            <div
              className={`flex items-center justify-center gap-2 mt-6 mb-4 order-2 md:order-1 md:mt-4 md:w-[52.125rem] md:mx-6 md:justify-between`}
            >
              <button
                onClick={addRadioButtons}
                className={`flex items-center justify-center w-[8.5rem] h-8 gap-1 rounded-[0.625rem] border-[1px] border-solid
                border-[#2085B0] shadow-custom2 bg-white md:w-[12.6875rem] md:h-12`}
              >
                <span
                  className={`text-[#2085B0] text-sm font-extrabold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg
                md:leading-[1.94863rem] md:tracking-[-0.01125rem]`}
                >
                  +
                </span>
                <span
                  className={`text-[#2085B0] text-xs font-bold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg
                md:leading-[1.94863rem] md:tracking-[-0.01125rem]`}
                >
                  Agregar una opción
                </span>
              </button>
              <button
                onClick={addRadioButtons}
                className={`flex items-center justify-center w-[8.5rem] h-8 gap-1 rounded-[0.625rem] border-[1px] border-solid
                border-[#2085B0] shadow-custom2 bg-[#2085B0] md:w-[12.6875rem] md:h-12`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={width > 768 ? '22' : '17'}
                  height={width > 768 ? '21' : '16'}
                  viewBox='0 0 17 16'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3.63672 5.99967C3.63672 4.52692 4.83063 3.33301 6.30339 3.33301H10.3034C11.7761 3.33301 12.9701 4.52692 12.9701 5.99967V9.99967C12.9701 11.4724 11.7761 12.6663 10.3034 12.6663H6.30339C4.83063 12.6663 3.63672 11.4724 3.63672 9.99967V5.99967Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10.9701 6.75C11.3843 6.75 11.7201 6.41421 11.7201 6C11.7201 5.58579 11.3843 5.25 10.9701 5.25V6.75ZM5.63672 5.25C5.22251 5.25 4.88672 5.58579 4.88672 6C4.88672 6.41421 5.22251 6.75 5.63672 6.75V5.25ZM10.3034 8.75C10.7176 8.75 11.0534 8.41421 11.0534 8C11.0534 7.58579 10.7176 7.25 10.3034 7.25V8.75ZM6.30339 7.25C5.88917 7.25 5.55339 7.58579 5.55339 8C5.55339 8.41421 5.88917 8.75 6.30339 8.75V7.25ZM9.63672 10.75C10.0509 10.75 10.3867 10.4142 10.3867 10C10.3867 9.58579 10.0509 9.25 9.63672 9.25V10.75ZM6.97005 9.25C6.55584 9.25 6.22005 9.58579 6.22005 10C6.22005 10.4142 6.55584 10.75 6.97005 10.75V9.25ZM10.9701 5.25H5.63672V6.75H10.9701V5.25ZM10.3034 7.25H6.30339V8.75H10.3034V7.25ZM9.63672 9.25H6.97005V10.75H9.63672V9.25Z'
                    fill='white'
                  />
                </svg>
                <span
                  className={`text-white text-xs font-bold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg md:leading-[1.94863rem]
                md:tracking-[-0.01125rem]`}
                >
                  Guardar pregunta
                </span>
              </button>
            </div>
          </div>
        ) : (
          <p
            className={`text-[#0000004c] text-xl font-normal leading-7 tracking-[-0.0275rem] mx-auto mt-12 w-72 md:text-4xl md:font-bold
            md:leading-[3.375rem] md:tracking-[-0.0495rem] md:w-[42.1875rem] md:mt-44`}
          >
            Seleccione un tipo de pregunta para comenzar.
          </p>
        )}
      </div>
    </article>
  );
}

export default CreateForms;
