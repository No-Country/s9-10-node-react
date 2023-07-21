import { QuestionsInput, SaveButton, WhiteboardScreen } from '..';
import { useCreateForms } from '../../hooks';

function OpenEndedQuestion() {
  const { isSelected } = useCreateForms();

  return (
    <>
      {isSelected === 3 && (
        <WhiteboardScreen>
          <QuestionsInput />
          <div className='flex flex-col w-[17rem] ml-4 mt-2 md:flex-row md:justify-between md:w-[53rem] md:mt-4'>
            <div className='flex flex-wrap w-[12.5rem] md:w-[22rem]'>
              <p
                className={`text-black text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] mr-[1.9rem] md:text-xl
                md:leading-7 md:tracking-[-0.0275rem]`}
              >
                Cantidad de caracteres:
              </p>
              <input
                type='number'
                className={`w-12 h-6 rounded-[0.625rem] bg-white pl-3 md:w-16 md:h-8`}
              />
              <p
                className={`text-[#0000007f text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] mt-[0.81rem] md:text-base
                md:leading-6 md:tracking-[-0.022rem] md:mt-2`}
              >
                Cantidad máxima: 400 caracteres
              </p>
            </div>
            <div className='mx-auto mt-6 mb-4 md:mx-0 md:mt-0'>
              <SaveButton />
            </div>
          </div>
        </WhiteboardScreen>
      )}
    </>
  );
}

export default OpenEndedQuestion;
