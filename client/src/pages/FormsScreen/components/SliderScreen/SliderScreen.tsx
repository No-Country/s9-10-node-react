import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '..';
import { Forms } from '../../models/cards';
import { useScreenSize } from '../../../../hooks';
import { useForms } from '../../hooks';
import { Loader } from '../../../../Components';

function SliderScreen() {
  const { width } = useScreenSize();
  const sliderRef = useRef<Slider>(null);
  const { data, isLoading } = useForms();

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      {isLoading && <Loader />}
      {width < 768 ? (
        <div
          className={`flex flex-wrap w-full justify-center items-center gap-[1.88rem]
          overflow-hidden`}
        >
          {data?.map((card: Forms) => (
            <Card key={card?._id} card={card} />
          ))}
        </div>
      ) : (
        <Slider
          ref={sliderRef}
          slidesToShow={3}
          slidesToScroll={1}
          dots={false}
          infinite={true}
          initialSlide={0}
          className={`flex md:mt-[5rem]  
          w-[62rem]`}
          lazyLoad='ondemand'
          draggable={false}
          variableWidth={true}
        >
          {data?.map((card: Forms) => (
            <Card key={card?._id} card={card} />
          ))}
        </Slider>
      )}
      <button
        className='hidden md:flex absolute bottom-[5.94rem] right-14 bg-[#73C36F] rounded-full'
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
