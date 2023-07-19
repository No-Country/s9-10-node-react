interface TextActions {
  id: number;
  text: string;
}

const textActions: TextActions[] = [
  {
    id: 1,
    text: 'Plataforma personalizada: Ajustada a tu empresa, adaptable y flexible a desafíos.',
  },
  {
    id: 2,
    text: `Participación activa de empleado: Ideas, sugerencias y preocupaciones valoradas.`,
  },
  {
    id: 3,
    text: `Potentes herramientas
    de análisis: 
    Para decisiones informadas 
    y métricas valiosas.`,
  },
  {
    id: 4,
    text: `Comunicación abierta 
    y transparente: Fomentando confianza y colaboración.`,
  },
];

function WhyUsSection() {
  return (
    <article
      className={`flex flex-col justify-center items-center w-full h-[809px] md:h-[1376px]`}
    >
      <div
        className={`flex flex-col justify-center items-center w-[336px] md:w-[1152px] h-[296px] md:h-[368px] rounded-lg border-2
          border-black`}
      >
        <div className='flex flex-col justify-center items-center w-full h-32 md:h-[220px] border-b-2 border-black relative'>
          <img
            src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
            alt=' programación'
            loading='lazy'
            className='w-full h-full object-cover'
          />
          <h2 className='absolute md:top-[9.37rem] text-white text-base md:text-3xl font-semibold'>
            Estimule una cultura de feedback positivo
          </h2>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[168px] gap-6'>
          <h3
            className={`w-[15rem] md:w-[651px] h-8 text-base text-black md:text-[1.375rem] font-normal md:leading-[2.0625rem]
          md:tracking-[-0.03025rem]`}
          >
            Garantice que todas las opiniones sean escuchadas en su empresa.
          </h3>
          <button
            className={`w-[143px] h-12 rounded-md bg-[#2D3648] text-white font-bold text-base`}
          >
            Call to action
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full mt-14 md:mt-32 md:gap-[160px]'>
        <img
          src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
          alt=' programación'
          loading='lazy'
          className='hidden md:flex w-[360px] h-[360px] object-cover'
        />
        <div className='flex flex-col justify-center items-center'>
          <h2
            className={`text-2xl text-black font-bold text-center mx-6 leading-7 tracking-[-0.58px] mb-4
            md:text-[40px] md:leading-[60px] md:tracking-[-0.88px] md:w-[502px] md:text-left md:mb-8`}
          >
            Razones por las cuales elegir nuestra plataforma
          </h2>
          <div className='flex flex-row flex-wrap justify-center items-center w-full md:w-[530px] md:h-[466px] gap-4'>
            {textActions.map((textAction: TextActions) => (
              <div
                key={textAction.id}
                className={`flex flex-col justify-center items-center w-40 h-[144px] rounded-lg border-[1.1px] border-black
              md:w-64 md:h-[224px]`}
              >
                <img
                  src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
                  alt=' programación'
                  loading='lazy'
                  className=' w-full h-[90px] md:h-[116px] rounded-t-lg object-cover'
                />
                <div className='flex flex-col justify-center items-center w-full h-[54px] md:h-[108px] rounded-b-lg'>
                  <p className='text-[9px] md:text-[0.9375rem] text-black font-semibold text-left mx-4 md:leading-5'>
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
