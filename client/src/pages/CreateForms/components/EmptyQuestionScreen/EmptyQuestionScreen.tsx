import { WhiteboardScreen } from '..';
import { useCreateForms } from '../../hooks';

function EmptyQuestionScreen() {
  const { isSelected } = useCreateForms();

  return (
    <>
      {isSelected === 0 && (
        <WhiteboardScreen>
          <p
            className={`text-[#0000004c] text-xl font-normal leading-7 tracking-[-0.0275rem] mx-auto mt-8 mb-8 w-72 md:text-4xl md:font-bold
            md:leading-[3.375rem] md:tracking-[-0.0495rem] md:w-[42.1875rem] md:mt-24 md:mb-24`}
          >
            Seleccione un tipo de pregunta para comenzar.
          </p>
        </WhiteboardScreen>
      )}
    </>
  );
}

export default EmptyQuestionScreen;
