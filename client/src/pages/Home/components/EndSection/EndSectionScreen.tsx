function EndSectionScreen() {
  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-center items-center w-full h-[447px] gap-[137px]
      md:gap-[591px] md:h-[608px] bg-gray-300`}
    >
      <img
        src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
        alt='programación'
        loading='lazy'
        className='w-[150px] md:w-44 h-[150px] md:h-44 object-cover'
      />
      <button
        className={`w-[212px] h-16 rounded-lg bg-[#2D3648] text-white font-bold text-lg leading-6 tracking-[-0.18]
          md:h-[73px]`}
      >
        Call to action
      </button>
    </div>
  );
}

export default EndSectionScreen;
