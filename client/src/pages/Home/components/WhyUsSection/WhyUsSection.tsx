interface TextActions {
  id: number;
  title: string;
  text: string;
  image: string;
}

const textActions: TextActions[] = [
  {
    id: 1,
    title: 'Plataforma personalizada:',
    text: `Ajustada a tu empresa, adaptable y flexible a desafíos.`,
    image: '/home7.png',
  },
  {
    id: 2,
    title: 'Participación activa de empleado:',
    text: `Ideas, sugerencias y preocupaciones valoradas.`,
    image: '/home7.png',
  },
  {
    id: 3,
    title: 'Potentes herramientas de análisis:',
    text: `Para decisiones informadas 
    y métricas valiosas.`,
    image: '/home7.png',
  },
  {
    id: 4,
    title: 'Comunicación abierta y transparente:',
    text: `Fomentando confianza y colaboración.`,
    image: '/home7.png',
  },
];

function WhyUsSection() {
  return (
    <article
      className={`flex flex-col justify-center items-center w-full h-[809px] md:h-[1376px] bg-white`}
    >
      <div
        className={`flex flex-col justify-center items-center w-[336px] md:w-[1152px] h-[296px] md:h-[368px] rounded-[1.875rem] border-[2px]
          border-[#2D3648] border-solid`}
      >
        <div className='flex flex-col justify-center items-center w-full h-32 md:h-[220px] border-b-2 border-black relative'>
          <div className='w-full h-full rounded-t-[1.875rem] bg-[#185D81]' />
          <h2 className='absolute md:top-[9.37rem] text-white text-base md:text-3xl font-semibold'>
            Estimule una cultura de feedback positivo
          </h2>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[168px] gap-6'>
          <h3
            className={`w-[15rem] md:w-[49.625rem] h-8 text-base text-black md:text-[1.375rem] font-normal md:leading-[2.0625rem]
          md:tracking-[-0.03025rem] text-center`}
          >
            Garantice que todas las opiniones sean escuchadas en su empresa.
          </h3>
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
            {textActions.map((textAction: TextActions) => (
              <div
                key={textAction.id}
                className={`flex flex-col justify-center items-center w-40 h-[144px] rounded-lg border-[1.1px] border-black
              md:w-64 md:h-[224px]`}
              >
                <img
                  src={textAction.image}
                  alt=' programación'
                  loading='lazy'
                  className=' w-full h-[90px] md:h-[116px] rounded-t-lg object-cover'
                />
                <div className='flex flex-col justify-center md:justify-start w-full h-[54px] md:h-[108px] rounded-b-lg'>
                  <p className='text-[9px] md:text-[0.9375rem] text-black font-bold mx-4 md:leading-5 md:mt-4'>
                    {textAction.title}
                  </p>
                  <p className='text-[9px] md:text-[0.9375rem] text-black font-normal mx-4 md:leading-5'>
                    {textAction.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default WhyUsSection;
