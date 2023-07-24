import { useCreateForms } from '../../hooks';

function QuestionsInput() {
  const { question, setQuestion, clearInputQuestion } = useCreateForms();

  return (
    <div className='flex w-full items-center justify-center mt-4 gap-2 md:mt-6'>
      <input
        type='text'
        name='question'
        placeholder='Escriba su pregunta'
        value={question}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuestion(e.target.value)
        }
        className={`w-60 h-6 bg-white rounded-[0.625rem] px-2 md:w-[49.8125rem] md:h-9 text-base font-normal leading-6 
        tracking-[-0.022rem] text-[#0000007f] md:text-xl md:leading-7 md:tracking-[-0.0275rem]`}
      />
      <button
        className='flex items-center justify-center bg-white w-6 h-6 rounded-full shadow-md md:w-9 md:h-9'
        onClick={clearInputQuestion}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L6.46967 16.4697ZM12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L12.5303 12.5303ZM11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L11.4697 11.4697ZM17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L17.5303 7.53033ZM12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L12.5303 11.4697ZM16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L7.53033 6.46967ZM7.53033 17.5303L12.5303 12.5303L11.4697 11.4697L6.46967 16.4697L7.53033 17.5303ZM12.5303 12.5303L17.5303 7.53033L16.4697 6.46967L11.4697 11.4697L12.5303 12.5303ZM11.4697 12.5303L16.4697 17.5303L17.5303 16.4697L12.5303 11.4697L11.4697 12.5303ZM12.5303 11.4697L7.53033 6.46967L6.46967 7.53033L11.4697 12.5303L12.5303 11.4697Z'
            fill='#2085B0'
          />
        </svg>
      </button>
    </div>
  );
}

export default QuestionsInput;
