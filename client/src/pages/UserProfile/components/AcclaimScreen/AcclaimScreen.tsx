const acclaims = [
  {
    id: 1,
    acclaim:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laudantium sequi cum esse reiciendis.',
  },
  {
    id: 2,
    acclaim:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laudantium sequi cum esse reiciendis.',
  },
  {
    id: 3,
    acclaim:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laudantium sequi cum esse reiciendis.',
  },
  {
    id: 4,
    acclaim:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laudantium sequi cum esse reiciendis.',
  },
  {
    id: 5,
    acclaim:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laudantium sequi cum esse reiciendis.',
  },
];

function AcclaimScreen() {
  return (
    <article className='flex flex-col mt-5 md:mx-[76px] w-[336px] md:w-[912px] self-center md:self-start md:ml-[508px] md:mr-5 scrollbar-hide '>
      <h3 className='text-left text-xl font-bold text-black leading-[150%] tracking-tight'>
        Elogios
      </h3>
      <div className='flex flex-col md:flex-row md:gap-4 md:w-full overflow-x-scroll'>
        {acclaims.map((acclaim) => (
          <div
            key={acclaim?.id}
            className={`flex w-full md:min-w-[293px] min-h-[144px] my-3 rounded-3xl border-solid border-[1.74px] justify-center items-center`}
          >
            <p className='text-lg text-black font-medium leading-[150%] tracking-tight text-justify mx-3'>
              {acclaim?.acclaim}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default AcclaimScreen;
