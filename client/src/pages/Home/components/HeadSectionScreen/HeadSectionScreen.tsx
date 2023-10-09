import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeadSectionScreen() {
  const navigate = useNavigate();

  return (
    <article
      className={`flex flex-col md:flex-row-reverse justify-center items-center w-full 
    h-[440px] md:h-[608px] bg-white gap-5 md:gap-0`}
    >
      <img
        src='/home1.png'
        alt='programación'
        loading='lazy'
        className='w-[30rem] h-[25rem] md:w-[54.1875rem] mr-16 md:h-[41.6255rem] object-cover md:-mr-[28rem]'
      />
      <div className='flex flex-col justify-center items-center md:gap-4 md:absolute md:top-52 md:left-28'>
        <h1
          className={`text-2xl md:text-[4.375rem] font-bold text-black w-[247px] md:w-[35rem] md:h-[217px] text-center 
        md:text-left leading-[120%] md:leading-[6.5625rem] tracking-tight md:tracking-[-0.09625rem] md:-mt-16`}
        >
          Construye un ambiente laboral exitoso
        </h1>
        <div className='flex items-center justify-center gap-3 md:gap-[1.17rem] mt-6 md:mt-[148px] md:-ml-16'>
          <button
            className={`w-[158px] md:w-[16.52rem] h-12 md:h-[3.9375rem] rounded-[1.875rem] bg-[#73C36F] text-white font-bold text-xs 
            md:text-lg`}
            onClick={() => navigate('/login')}
          >
            Hablar con un asesor
          </button>
          <Link target='_blank' to={'https://www.youtube.com/watch?v=n38teUBV3ug&feature=youtu.be'}
            className={`flex w-[158px] md:w-[14.3125rem] h-12 md:h-[3.9375rem] rounded-[1.875rem] bg-[#EDF7ED] items-center justify-center 
          gap-2 border-[2px] border-solid border-[#73C36F]`}
          >
            <small className='text-[#73C36F] font-semibold text-xs md:text-lg'>
              Mirar el video
            </small>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.0267 9.18176L21.4119 14.7638C21.895 15.108 22.1819 15.6646 22.1819 16.2578C22.1819 16.851 21.895 17.4075 21.4119 17.7517L14.0202 23.8573C13.3963 24.3528 12.5515 24.4678 11.8177 24.1572C11.084 23.8467 10.5785 23.1601 10.4998 22.3673V10.6757C10.5757 9.87972 11.0817 9.18939 11.818 8.87753C12.5543 8.56567 13.4022 8.68247 14.0267 9.18176Z'
                stroke='#73C36F'
                strokeWidth='1.9486'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default HeadSectionScreen;
