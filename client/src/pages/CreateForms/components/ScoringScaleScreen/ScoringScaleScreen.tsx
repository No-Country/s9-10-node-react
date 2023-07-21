import { QuestionsInput, SaveButton, WhiteboardScreen } from '..';
import { useCreateForms } from '../../hooks';

function ScoringScaleScreen() {
  const { isSelected } = useCreateForms();

  return (
    <>
      {isSelected === 4 && (
        <WhiteboardScreen>
          <QuestionsInput />
          <div className='flex flex-col w-[17rem] ml-4 mt-2 md:flex-row md:justify-between md:w-[53rem] md:mt-4 md:mb-4'>
            <div className='flex flex-wrap w-[12.5rem] md:w-[20rem] gap-2'>
              <p
                className={`text-black text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] mr-[1.9rem] md:text-xl
                md:leading-7 md:tracking-[-0.0275rem]`}
              >
                Comenzar escala en:
              </p>
              <input
                type='number'
                className={`w-12 h-6 rounded-[0.625rem] bg-white pl-3 md:w-16 md:h-8`}
              />
              <p
                className={`text-black text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] mr-[1.9rem] md:text-xl
                md:leading-7 md:tracking-[-0.0275rem]`}
              >
                Terminar escala en:
              </p>
              <input
                type='number'
                className={`w-12 h-6 rounded-[0.625rem] bg-white pl-3 md:w-16 md:h-8 ml-2`}
              />
              <p
                className={`text-black text-xs font-normal leading-[1.125rem] tracking-[-0.0165rem] mr-[1.9rem] md:text-xl
                md:leading-7 md:tracking-[-0.0275rem]`}
              >
                Paso:
              </p>
              <input
                type='number'
                className={`w-12 h-6 rounded-[0.625rem] bg-white pl-3 md:w-16 md:h-8`}
              />
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

export default ScoringScaleScreen;
