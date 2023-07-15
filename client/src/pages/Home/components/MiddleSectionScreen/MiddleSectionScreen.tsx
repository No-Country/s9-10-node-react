function MiddleSectionScreen() {
  return (
    <article
      className={`flex flex-col md:flex-row justify-center items-center w-full h-[440px] md:h-[736px] mt-6 
      md:mt-20 md:gap-48 bg-gray-300`}
    >
      <div className='flex flex-col justify-center items-center w-full md:w-min'>
        <h2
          className={`text-2xl md:text-6xl font-bold text-black leading-7 md:leading-[90px] tracking-tight md:tracking-[1.32px] 
          text-center md:text-left w-[339px] md:w-[406px]`}
        >
          Organiza a tu equipo en simples pasos
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
        <div className='flex flex-col justify-center items-center w-max h-min gap-[78px] md:gap-[150px] md:-mt-24'>
          <p className='text-lg font-semibold text-black leading-7 tracking-[-0.39px]'>
            Lorem ipsum dolor
          </p>
          <p className='text-lg font-semibold text-black leading-7 tracking-[-0.39px]'>
            Lorem ipsum dolor
          </p>
          <p className='text-lg font-semibold text-black leading-7 tracking-[-0.39px]'>
            Lorem ipsum dolor
          </p>
        </div>
      </div>
    </article>
  );
}

export default MiddleSectionScreen;
