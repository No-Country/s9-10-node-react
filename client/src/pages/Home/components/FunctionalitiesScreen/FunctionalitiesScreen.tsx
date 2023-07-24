function FunctionalitiesScreen() {
  return (
    <article className='flex flex-col justify-center items-center w-full h-[976px] md:h-[800px]'>
      <h2
        className={`text-2xl md:text-[2.5rem] font-bold text-black leading-[120%] tracking-[-0.528px] md:leading-[150%] 
          mt-8 md:mt-16 mb-4 md:mb-2 text-center md:text-5xl md:leading-[leading-[3.75rem] md:tracking-[-0.055rem]`}
      >
        Explora las <span className='text-[#7A8CEB]'>funciones</span> que
        ofrecemos
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full gap-4 md:gap-8 mb-6 md:mb-0'>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <img
            src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
            alt='programación'
            loading='lazy'
            className='flex w-full h-48 md:h-[242px] object-cover'
          />
          <div className='flex flex-col justify-center w-full h-[83px] md:h-[231px]'>
            <p
              className={`text-lg md:text-3xl text-black font-bold text-left ml-[2.21rem]`}
            >
              Funciones:
            </p>
            <ul
              className={`text-base md:text-2xl text-black font-normal text-left ml-[3rem] md:mt-7`}
            >
              <li> - Administrar equipos</li>
              <li> - Administrar roles</li>
            </ul>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <img
            src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
            alt='programación'
            loading='lazy'
            className='flex w-full h-48 md:h-[242px] object-cover'
          />
          <div className='flex flex-col justify-center w-full h-[83px] md:h-[231px]'>
            <p
              className={`text-lg md:text-3xl text-black font-bold text-left ml-[2.21rem]`}
            >
              Funciones:
            </p>
            <ul
              className={`text-base md:text-2xl text-black font-normal text-left ml-[3rem] md:mt-7`}
            >
              <li> - Creación de formularios</li>
              <li> - Valoraciones anónimas</li>
            </ul>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <img
            src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
            alt='programación'
            loading='lazy'
            className='flex w-full h-48 md:h-[242px] object-cover'
          />
          <div className='flex flex-col justify-center w-full h-[83px] md:h-[231px]'>
            <p
              className={`text-lg md:text-3xl text-black font-bold text-left ml-[2.21rem]`}
            >
              Funciones:
            </p>
            <ul
              className={`text-base md:text-2xl text-black font-normal text-left ml-[3rem] md:mt-7`}
            >
              <li> - Visualizar métricas</li>
              <li> - Mejores en su puesto/equipo</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FunctionalitiesScreen;
