import { useScreenSize } from '../../../../hooks';

interface TitleScreenProps {
  title: string;
  showSubtitle?: boolean;
}

function TitleScreen({ title, showSubtitle = true }: TitleScreenProps) {
  const { width } = useScreenSize();

  return (
    <div className='flex flex-col items-center justify-center w-full md:w-[57.125rem] md:items-start'>
      <h2
        className={`text-black text-xl font-bold leading-7 tracking-[-0.0275rem] mt-1 md:text-4xl md:leading-[3.375rem]
        md:tracking-[-0.0495rem] md:mt-2`}
      >
        {title}
      </h2>
      <p
        className={`text-[#185D81] text-[0.6875rem] font-normal leading-[1.03125rem] tracking-[-0.01513rem] w-[20.875rem] h-8
          mt-8 md:text-[0.9375rem] md:leading-[1.40625rem] md:tracking-[-0.02063rem] md:w-full md:mt-4`}
      >
        {width > 768 && 'ATENCIÓN: '}
        Las preguntas de respuesta abierta no serán tenidas en cuenta en los
        cálculos estadísticos.
      </p>
      {width >= 768 && showSubtitle && (
        <div className='flex flex-col items-start justify-center w-[57.125rem]'>
          <hr className='w-full h-[0.0625rem] bg-[#7A8CEB] mt-6' />
          <p className='text-[0.9375rem] font-normal leading-[1.40625rem] tracking-[-0.02063rem] mt-4'>
            Seleccione el tipo de pregunta
          </p>
        </div>
      )}
    </div>
  );
}

export default TitleScreen;
