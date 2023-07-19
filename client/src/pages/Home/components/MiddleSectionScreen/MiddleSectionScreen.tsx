function MiddleSectionScreen() {
  return (
    <article
      className={`flex flex-col md:flex-row justify-center items-center w-full h-[440px] md:h-[736px] mt-6 
      md:mt-20 md:gap-48 bg-gray-300`}
    >
      <div className='flex flex-col justify-center items-center w-full md:w-min'>
        <h2
          className={`text-2xl md:text-6xl font-bold text-black leading-7 md:leading-[5.625rem] tracking-tight md:tracking-[-0.0825rem] 
          text-center md:text-left w-[339px] md:w-[34rem]`}
        >
          Promueva la retroalimentación en simples pasos
        </h2>
        <img
          src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
          alt='programación'
          loading='lazy'
          className='w-44 h-44 hidden md:flex mt-4 self-start object-cover'
        />
      </div>
      <div className='flex justify-center items-center mt-6 md:mt-[78px] gap-7 md:gap-14'>
        <div className='flex flex-col justify-center items-center w-[52px] h-min'>
          <div
            className={`w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full mb-14 md:mb-[93px] z-10 border-2
          border-gray-500`}
          >
            <img
              src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
              alt='programación'
              loading='lazy'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <hr className='h-[1.3px] bg-black w-[218px] md:w-[360px] rotate-90' />
          <div className='w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full mb-14 md:mb-[93px] z-10 border-2 border-gray-500'>
            <img
              src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
              alt='programación'
              loading='lazy'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='w-[52px] md:w-[88px] h-[52px] md:h-[88px] rounded-full md:mb-[93px] z-10 border-2 border-gray-500'>
            <img
              src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
              alt='programación'
              loading='lazy'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-9 md:gap-0 w-max h-min '>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-black leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[7.68rem] mt-4 md:mt-0`}
          >
            Cree diferentes equipos de trabajo
          </p>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-black leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[8.68rem] md:mt-[3.2rem]`}
          >
            Diseñe una encuesta personalizada para cada rol del grupo
          </p>
          <p
            className={`text-lg md:text-[2rem] font-semibold text-black leading-7 tracking-[-0.39px] w-44 md:w-[22.75rem]
          md:h-[11.25rem] md:mt-11`}
          >
            Obtenga el feedback y las métricas de los empleados
          </p>
        </div>
      </div>
    </article>
  );
}

export default MiddleSectionScreen;
