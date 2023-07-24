import { CustomButton } from '..';
import { useScreenSize } from '../../../../hooks';

function MenuButtons() {
  const { width } = useScreenSize();

  return (
    <div className='flex flex-wrap w-full justify-center mt-4 gap-4 md:w-[57.125rem] md:mt-6 md:justify-start md:gap-5'>
      <CustomButton
        id={1}
        label='Opción única'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
      />
      <CustomButton
        id={2}
        label='Opción múltiple'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
      />
      <CustomButton
        id={3}
        label='Pregunta abierta'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
      />
      <CustomButton
        id={4}
        label='Escala de puntuación'
        isEnabled={true}
        handleClick={() => console.log('clicked')}
      />
      {width > 768 && (
        <>
          <CustomButton label='Ranking' isEnabled={false} />
          <CustomButton label='Semántica diferencial' isEnabled={false} />
          <CustomButton label='Escala de Likert' isEnabled={false} />
          <CustomButton label='Rango de fechas' isEnabled={false} />
        </>
      )}
    </div>
  );
}

export default MenuButtons;
