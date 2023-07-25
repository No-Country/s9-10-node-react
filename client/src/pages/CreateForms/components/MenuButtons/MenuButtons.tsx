import { useState } from 'react';
import { CustomButton } from '..';
import { useScreenSize } from '../../../../hooks';

interface MenuButtonsProps {
  setShowOneOptionDiv: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuButtons({ setShowOneOptionDiv }: MenuButtonsProps) {
  const { width } = useScreenSize();
  const [isSelected, setIsSelected] = useState<number>(0);

  return (
    <div className='flex flex-wrap w-full justify-center mt-4 gap-4 md:w-[57.125rem] md:mt-6 md:justify-start md:gap-5'>
      <CustomButton
        id={1}
        label='Opción única'
        isEnabled={true}
        isSelected={isSelected}
        handleClick={() => setShowOneOptionDiv(true)}
        handleGetId={() => setIsSelected(1)}
      />
      <CustomButton
        id={2}
        isSelected={isSelected}
        label='Opción múltiple'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
        handleGetId={() => setIsSelected(2)}
      />
      <CustomButton
        id={3}
        label='Pregunta abierta'
        isSelected={isSelected}
        isEnabled={true}
        handleClick={() => console.log('clicked')}
        handleGetId={() => setIsSelected(3)}
      />
      <CustomButton
        id={4}
        isSelected={isSelected}
        label='Escala de puntuación'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
        handleGetId={() => setIsSelected(4)}
      />
      {width > 768 && (
        <>
          <CustomButton
            label='Ranking'
            isEnabled={false}
            handleGetId={() => setIsSelected(5)}
          />
          <CustomButton
            label='Semántica diferencial'
            isEnabled={false}
            handleGetId={() => setIsSelected(6)}
          />
          <CustomButton
            label='Escala de Likert'
            isEnabled={false}
            handleGetId={() => setIsSelected(7)}
          />
          <CustomButton
            label='Rango de fechas'
            isEnabled={false}
            handleGetId={() => setIsSelected(8)}
          />
        </>
      )}
    </div>
  );
}

export default MenuButtons;
