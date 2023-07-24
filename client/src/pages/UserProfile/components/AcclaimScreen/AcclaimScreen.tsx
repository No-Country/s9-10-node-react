import { useState } from 'react';
import { useScreenSize } from '../../../../hooks';

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
  const [progress, setProgress] = useState<number>(50);
  const { width } = useScreenSize();

  return (
    <article>
      <div className='flex flex-col mt-5 w-[336px] md:w-[912px] self-center md:self-start md:mr-5'>
        <h3 className='text-left text-xl font-bold text-black leading-[150%] tracking-tight order-2 md:order-1'>
          Elogios
        </h3>
        <div className='flex flex-col md:flex-row md:gap-4 md:w-full overflow-x-scroll order-3 md:order-2'>
          {acclaims.map((acclaim) => (
            <div
              key={acclaim?.id}
              className={`flex w-full md:min-w-[293px] min-h-[144px] my-3 rounded-3xl border-solid border-[1.74px] justify-center 
            items-center`}
            >
              <p className='text-lg text-black font-medium leading-[150%] tracking-tight text-justify mx-3'>
                {acclaim?.acclaim}
              </p>
            </div>
          ))}
        </div>
        {/* progressbar */}
        <div
          className={`flex flex-col w-[336px] md:w-[868px] h-32 md:h-[154px] items-center justify-center mt-8 md:mt-12 rounded-[26px] 
          gap-8 order-1 md:order-3 border-2 border-solid border-[#EDF0F7] mb-5 md:mb-0`}
        >
          <h4 className='h-9 text-xl md:text-2xl font-bold leading-[150%] tracking-tight'>
            {width < 768
              ? 'Feedbacks realizados'
              : 'Feedbacks realizados de compañeros'}
          </h4>
          <div className='w-72 md:w-[733px] h-1 bg-gray-200 relative'>
            <small className='absolute right-1 -top-7 text-lg font-medium text-black leading-[150%] tracking-tight'>
              {progress}%
            </small>
            <div
              className='h-full bg-green-500'
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default AcclaimScreen;
