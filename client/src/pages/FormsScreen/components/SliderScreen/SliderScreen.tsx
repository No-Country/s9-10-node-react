import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '..';
import { Forms, cards } from '../../models/cards';
import { useScreenSize } from '../../../../hooks';

function SliderScreen() {
  const { width } = useScreenSize();
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      {width < 768 ? (
        <div
          className={`flex flex-wrap w-full justify-center items-center gap-[1.88rem] md:mt-[7.5rem] md:flex-nowrap 
          md:w-[900px] overflow-hidden`}
        >
          {cards.map((card: Forms) => (
            <Card card={card} />
          ))}
        </div>
      ) : (
        <Slider
          ref={sliderRef}
          slidesToShow={3.5}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          initialSlide={0}
          className={`flex justify-center items-center md:mt-[5rem]  
          w-[900px]`}
          lazyLoad='ondemand'
        >
          {cards.map((card: Forms) => (
            <Card card={card} />
          ))}
        </Slider>
      )}
      <button
        className='hidden md:flex absolute bottom-[5.94rem] right-8 bg-black rounded-full'
        onClick={handleNext}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
        >
          <path
            d='M15 10.5L22.5 18L15 25.5'
            stroke='#FCFCFC'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </>
  );
}

export default SliderScreen;
