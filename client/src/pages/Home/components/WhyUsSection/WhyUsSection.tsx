interface TextActions {
  id: number;
  text: string;
}

const textActions: TextActions[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet',
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
        <div className='flex flex-col justify-center items-center w-full h-32 md:h-[220px] border-b-2 border-black'>
          <img
            src='https://th.bing.com/th/id/R.1228d494b2f79ba87f65a667ba53989d?rik=nofvPe3NI0Y28Q&pid=ImgRaw&r=0'
            alt=' programación'
            loading='lazy'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[168px] gap-6'>
          <div className='w-[163.2px] md:w-[651px] h-8 bg-gray-500'></div>
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
                  <p className='text-[15px] md:text-[32px] text-black font-semibold text-left mx-4 md:leading-10'>
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
