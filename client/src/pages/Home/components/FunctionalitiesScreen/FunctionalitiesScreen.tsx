function FunctionalitiesScreen() {
  return (
    <article className='flex flex-col justify-center items-center w-full h-[976px] md:h-[800px]'>
      <h1
        className={`text-2xl md:text-[40px] font-bold text-black leading-[120%] tracking-[-0.528px] md:leading-[150%] md:tracking-[-0.88px] 
          mt-8 md:mt-16 mb-4 md:mb-2`}
      >
        Funcionalidades
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full gap-4 md:gap-8 mb-6 md:mb-0'>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <div className='flex w-full h-48 md:h-[242px] bg-red-300'></div>
          <div className='flex flex-col justify-center items-center w-full h-[83px] md:h-[231px]'></div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <div className='flex w-full h-48 md:h-[242px] bg-red-300'></div>
          <div className='flex flex-col justify-center items-center w-full h-[83px] md:h-[231px]'></div>
        </div>
        <div
          className={`flex flex-col justify-center items-center w-[328px] md:w-[416px] h-[280px] md:h-[478px] rounded-xl border-2 
            border-solid border-[#2D3648] overflow-hidden`}
        >
          <div className='flex w-full h-48 md:h-[242px] bg-red-300'></div>
          <div className='flex flex-col justify-center items-center w-full h-[83px] md:h-[231px]'></div>
        </div>
      </div>
    </article>
  );
}

export default FunctionalitiesScreen;