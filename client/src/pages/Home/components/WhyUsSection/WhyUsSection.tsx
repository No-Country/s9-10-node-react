import { ReasonsScreen } from '..';

function WhyUsSection() {
  return (
    <article
      className={`flex flex-col justify-center items-center w-full h-[114.5rem] md:h-[1376px] bg-white`}
    >
      <div
        className={`flex flex-col justify-center items-center w-[336px] md:w-[1152px] h-[20.75rem] md:h-[24.75rem] rounded-[1.875rem] border-[2px]
          border-[#D3D9F8] border-solid`}
      >
        <div className='flex flex-col justify-center items-center w-full h-[13.75rem] relative'>
          <div
            className='absolute top-0 left-0 w-full h-full rounded-t-[1.875rem] z-10 md:w-[40.13rem]'
            style={{
              background:
                'linear-gradient(90deg, #2085B0 14.58%, rgba(32, 133, 176, 0.00) 100%)',
            }}
          />
          <img
            className='w-full h-full rounded-t-[1.875rem] object-contain md:object-cover'
            src='/home9.jpg'
            alt='cellphone'
          />
          <h2
            className={`absolute text-white text-2xl md:text-3xl font-semibold leading-[1.95rem] tracking-[-0.033rem]
            mt-[4.06rem] mr-[5.13rem] mb-[4.13rem] ml-[1.69rem] w-[13.6875rem] z-20 md:top-3 md:left-28 md:leading-[2.8125rem]
            md:tracking-[-0.04125rem] md:w-80`}
          >
            Estimule una cultura de feedback positivo
          </h2>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[168px] md:h-44 gap-6'>
          <p className='hidden md:flex text-black font-semibold text-2xl leading-[2.25rem] tracking-[-0.033rem]'>
            Garantice que todas las opiniones sean escuchadas en su empresa.
          </p>
          <button
            className={`w-[143px] h-12 rounded-[1.875rem] bg-[#F0900E] text-xs text-white font-bold md:text-base md:w-[12.75rem]`}
          >
            Asesoría Instantánea
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full mt-14 md:mt-32 md:gap-[4rem]'>
        <img
          src='/home6.png'
          alt=' programación'
          loading='lazy'
          className='hidden md:flex w-[48.8125rem] h-[36.3125rem] object-contain z-10'
        />
        <div
          className={`hidden md:flex absolute w-[51.25rem] h-[40.9375rem] bg-[#E9ECFC] left-0 rounded-r-[25rem]`}
        />
        <div className='flex flex-col justify-center items-center'>
          <h2
            className={`text-2xl text-black font-bold text-center leading-7 tracking-[-0.58px] mb-4
            md:text-[2.5rem] md:leading-[60px] md:tracking-[-0.88px] md:w-[502px] md:text-left md:mb-8`}
          >
            Razones por las cuales{' '}
            <span className='text-[#7A8CEB]'>elegir</span> nuestra plataforma
          </h2>
          <div className='flex flex-row flex-wrap justify-center items-center w-full md:w-[530px] md:h-[466px] gap-4'>
            <ReasonsScreen />
          </div>
        </div>
      </div>
    </article>
  );
}

export default WhyUsSection;
