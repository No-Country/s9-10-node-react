function HeadSectionScreen() {
  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-center items-center w-full 
    h-[440px] md:h-[608px] bg-slate-200 gap-36 md:gap-64`}
    >
      <article className='w-11 h-11 md:w-44 md:h-44 bg-red-300'></article>
      <article className='flex flex-col justify-center items-center'>
        <h1
          className={`text-2xl md:text-7xl font-bold text-black w-[247px] md:w-[545px] md:h-[217px] text-center 
        md:text-left leading-[120%] md:leading-[150%] tracking-tight`}
        >
          Lorem ipsum dolor sit amet
        </h1>
        <div className='flex items-center justify-center gap-3 md:gap-10 mt-6 md:mt-[88px] md:-ml-16'>
          <button className='w-[158px] md:w-[212px] h-12 md:h-[73px] rounded-md bg-[#2D3648] text-white font-bold text-lg md:text-2xl'>
            Call to action
          </button>
          <button className='flex w-[158px] md:w-[212px] h-12 md:h-[73px] rounded-md bg-white items-center justify-center gap-2'>
            <small className='text-black font-semibold text-base md:text-2xl'>
              Mirar el video
            </small>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.2228 8.68225L21.608 14.2643C22.0911 14.6085 22.3779 15.1651 22.3779 15.7583C22.3779 16.3514 22.0911 16.908 21.608 17.2522L14.2163 23.3578C13.5923 23.8532 12.7475 23.9683 12.0138 23.6577C11.28 23.3472 10.7745 22.6606 10.6958 21.8678V10.1762C10.7717 9.38021 11.2778 8.68988 12.014 8.37802C12.7503 8.06616 13.5983 8.18296 14.2228 8.68225Z'
                stroke='black'
                strokeWidth='1.9486'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
}

export default HeadSectionScreen;