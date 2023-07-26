function FunctionalitiesScreen() {
  return (
    <article className='flex flex-col justify-center items-center w-full h-[70rem] md:h-[46rem] bg-white'>
      <h2
        className={`text-2xl md:text-[2.5rem] font-bold text-black leading-[120%] tracking-[-0.528px] md:leading-[150%] 
          mt-8 md:mt-16 mb-4 md:mb-2 text-center md:text-5xl md:leading-[leading-[3.75rem] md:tracking-[-0.055rem]`}
      >
        Explora las <span className='text-[#7A8CEB]'>funciones</span> que
        ofrecemos
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full gap-4 md:gap-8 mb-6 md:mb-0'>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[26rem] h-[20.02rem] md:h-[29.02rem] rounded-xl border-2 
            border-solid border-[#D3D9F8] overflow-hidden`}
        >
          <img
            src='/home2.png'
            alt='programación'
            loading='lazy'
            className='flex w-full h-[9.02rem] md:h-[11.27rem] object-contain'
          />
          <div className='flex flex-col justify-center items-center w-full h-[11rem] md:h-[17.75rem] py-4 px-6 gap-2 md:py-[2.21rem] md:px-4'>
            <p
              className={`text-[1.375rem] md:text-3xl text-black font-bold leading-[1.7875rem] tracking-[-0.03025rem] text-left
              md:leading-[2.4375rem] md:tracking-[-0.04125rem]`}
            >
              Administrar <span className='text-[#7A8CEB]'>equipos</span> de la
              empresa
            </p>
            <p
              className={`text-base md:text-[1.3125rem] text-left text-black font-normal md:mt-7 leading-[1.5rem] tracking-[-0.022rem]
              md:leading-[1.96875rem] md:tracking-[-0.02888rem]`}
            >
              Capacidad de supervisar, coordinar y optimizar la productividad de
              sus equipos y empleados.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[26rem] h-[20.02rem] md:h-[29.02rem] rounded-xl border-2 
            border-solid border-[#D3D9F8] overflow-hidden`}
        >
          <img
            src='/home3.png'
            alt='programación'
            loading='lazy'
            className='flex w-full h-[9.02rem] md:h-[11.27rem] object-contain'
          />
          <div className='flex flex-col justify-center items-center w-full h-[11rem] md:h-[17.75rem] py-4 px-6 gap-2 md:py-[2.21rem] md:px-4'>
            <p
              className={`text-[1.375rem] md:text-3xl text-black font-bold leading-[1.7875rem] tracking-[-0.03025rem] text-left
              md:leading-[2.4375rem] md:tracking-[-0.04125rem]`}
            >
              <span className='text-[#7A8CEB]'>Valoraciones</span> anónimas y
              valiosas
            </p>
            <p
              className={`text-base md:text-[1.3125rem] text-left text-black font-normal md:mt-7 leading-[1.5rem] tracking-[-0.022rem]
              md:leading-[1.96875rem] md:tracking-[-0.02888rem]`}
            >
              Retroalimentación confidencial sobre el entorno laboral, la
              cultura laboral y el desempeño del equipo.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[26rem] h-[20.02rem] md:h-[29.02rem] rounded-xl border-2 
            border-solid border-[#D3D9F8] overflow-hidden`}
        >
          <img
            src='/home4.png'
            alt='programación'
            loading='lazy'
            className='flex w-full h-[9.02rem] md:h-[11.27rem] object-contain'
          />
          <div className='flex flex-col justify-center items-center w-full h-[11rem] md:h-[17.75rem] py-4 px-6 gap-2 md:py-[2.21rem] md:px-4'>
            <p
              className={`text-[1.375rem] md:text-3xl text-black font-bold leading-[1.7875rem] tracking-[-0.03025rem] text-left
              md:leading-[2.4375rem] md:tracking-[-0.04125rem]`}
            >
              <span className='text-[#7A8CEB]'>Insights y métricas</span>{' '}
              específicas
            </p>
            <p
              className={`text-base md:text-[1.3125rem] text-left text-black font-normal md:mt-7 leading-[1.5rem] tracking-[-0.022rem]
              md:leading-[1.96875rem] md:tracking-[-0.02888rem]`}
            >
              Evaluar desempeño, identificar y reconocer talentos, detectar
              mejoras y tomar decisiones informadas.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FunctionalitiesScreen;
