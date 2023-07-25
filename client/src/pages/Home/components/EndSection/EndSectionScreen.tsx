function EndSectionScreen() {
  return (
    <div
      className={`flex justify-center items-center w-full h-[447px] gap-[137px]
      md:gap-[591px] md:h-[46.9375rem] relative`}
    >
      <div
        className='flex md:h-[46.9375rem] absolute left-0 top-0 md:w-[55.75rem] z-10'
        style={{
          background:
            'linear-gradient(90deg, #0C2E41 44.27%, rgba(24, 93, 129, 0.00) 84.03%)',
        }}
      >
        <button
          className={`w-[212px] h-16 rounded-lg bg-[#2D3648] text-white font-bold text-lg leading-6 tracking-[-0.18rem]
          md:h-[73px] z-10`}
        >
          Call to action
        </button>
      </div>
      <div>
        <img
          src='/home8.png'
          alt='work-team'
          className='md:w-[70.375rem] md:h-[46.9375rem] flex absolute right-0 top-0'
        />
      </div>
    </div>
  );
}

export default EndSectionScreen;
