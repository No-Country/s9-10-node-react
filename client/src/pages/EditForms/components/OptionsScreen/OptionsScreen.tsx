import {
  QuestionsInput,
  SaveButton,
  WhiteboardScreen,
} from '../../../CreateForms/components';

function OptionsScreen() {
  return (
    <WhiteboardScreen>
      <QuestionsInput />
      <div className='order-1 md:order-2'>
        {/* {Object.keys(radioButtons).map((radioButton, index) => (
          <div
            key={index}
            className={`flex items-center justify-start gap-4 ml-4 mt-5 md:mb-5 md:ml-6`}
          >
            <input type='radio' name={isSelected === 1 ? 'one' : ''} />
            <input
              type='text'
              name={radioButton}
              placeholder={`Opción ${index + 1}`}
              className={`bg-transparent text-black text-base font-normal leading-6 tracking-[-0.022rem] md:text-xl md:leading-7
                    md:tracking-[-0.0275rem]`}
              value={radioButtons[radioButton]}
              onChange={handleOptionInputChange}
            />
          </div>
        ))} */}
      </div>
      <div
        className={`flex items-center justify-center gap-2 mt-6 mb-4 order-2 md:order-1 md:mt-4 md:w-[52.125rem] md:mx-6 md:justify-between`}
      >
        <button
          // onClick={addRadioButtons}
          className={`flex items-center justify-center w-[8.5rem] h-8 gap-1 rounded-[0.625rem] border-[1px] shadow-custom2 
              bg-[#2085B0] md:w-[12.6875rem] md:h-12`}
        >
          <span
            className={`text-white text-sm font-extrabold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg
                md:leading-[1.94863rem] md:tracking-[-0.01125rem]`}
          >
            +
          </span>
          <span
            className={`text-white text-xs font-bold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg
                md:leading-[1.94863rem] md:tracking-[-0.01125rem]`}
          >
            Agregar una opción
          </span>
        </button>
        <SaveButton saveOptionsQuestion={() => console.log('hi')} />
      </div>
    </WhiteboardScreen>
  );
}

export default OptionsScreen;
