import { useScreenSize } from '../../../../hooks';

function EndSectionScreen() {
  const { width } = useScreenSize();

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center w-full h-[33.5rem]
      md:h-[46.9375rem] relative`}
    >
      <div
        className='flex w-full h-[17.5rem] md:h-[46.9375rem] absolute left-0 top-0 md:w-[55.75rem] z-10'
        style={{
          background: `${
            width < 768
              ? 'linear-gradient(180deg, #0C2E41 81.25%, rgba(24, 93, 129, 0.00) 100%)'
              : 'linear-gradient(90deg, #0C2E41 44.27%, rgba(24, 93, 129, 0.00) 84.03%)'
          }`,
        }}
      >
        <div className='relative flex flex-col mx-auto items-center gap-[1.62rem] mt-9 md:gap-12 md:mx-0 md:items-start md:mt-[9.1rem] md:ml-[7.5rem]'>
          <h5
            className={`text-white text-[1.625rem] font-bold leading-[2.4375rem] tracking-[-0.03575rem] w-80 text-center md:text-6xl
            md:leading-[5.625rem] md:tracking-[-0.0825rem] md:w-[25rem] md:text-left`}
          >
            Fortalezca la <span className='text-[#73C36F]'>colaboración</span> y
            el logro de objetivos
          </h5>
          <button
            className={`w-40 h-[2.875rem] rounded-[1.875rem] bg-[#F0900E] text-white font-bold text-lg leading-[1.94863rem]
            tracking-[-0.01125rem]md:h-[73px] z-10 md:w-[12.25rem] md:h-[3.875rem] md:leading-[1.5rem] tracking-[-0.01125rem]`}
          >
            Empieza hoy
          </button>
        </div>
      </div>
      <div>
        <img
          src='/home8.png'
          alt='work-team'
          className='w-full h-[20rem] md:w-[70.375rem] md:h-[46.9375rem] flex absolute left-0 bottom-0 md:left-auto md:right-0 md:top-0 object-cover'
        />
      </div>
    </div>
  );
}

export default EndSectionScreen;
