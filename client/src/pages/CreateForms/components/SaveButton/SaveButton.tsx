import { useScreenSize } from '../../../../hooks';

interface SaveButtonProps {
  saveOptionsQuestion: () => void;
}

function SaveButton({ saveOptionsQuestion }: SaveButtonProps) {
  const { width } = useScreenSize();

  return (
    <button
      onClick={saveOptionsQuestion}
      className={`flex items-center justify-center w-[8.5rem] h-8 gap-1 rounded-[0.625rem] border-[1px] border-solid
                border-[#2085B0] shadow-custom2 bg-[#2085B0] md:w-[12.6875rem] md:h-12`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width > 768 ? '22' : '17'}
        height={width > 768 ? '21' : '16'}
        viewBox='0 0 17 16'
        fill='none'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M3.63672 5.99967C3.63672 4.52692 4.83063 3.33301 6.30339 3.33301H10.3034C11.7761 3.33301 12.9701 4.52692 12.9701 5.99967V9.99967C12.9701 11.4724 11.7761 12.6663 10.3034 12.6663H6.30339C4.83063 12.6663 3.63672 11.4724 3.63672 9.99967V5.99967Z'
          stroke='white'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.9701 6.75C11.3843 6.75 11.7201 6.41421 11.7201 6C11.7201 5.58579 11.3843 5.25 10.9701 5.25V6.75ZM5.63672 5.25C5.22251 5.25 4.88672 5.58579 4.88672 6C4.88672 6.41421 5.22251 6.75 5.63672 6.75V5.25ZM10.3034 8.75C10.7176 8.75 11.0534 8.41421 11.0534 8C11.0534 7.58579 10.7176 7.25 10.3034 7.25V8.75ZM6.30339 7.25C5.88917 7.25 5.55339 7.58579 5.55339 8C5.55339 8.41421 5.88917 8.75 6.30339 8.75V7.25ZM9.63672 10.75C10.0509 10.75 10.3867 10.4142 10.3867 10C10.3867 9.58579 10.0509 9.25 9.63672 9.25V10.75ZM6.97005 9.25C6.55584 9.25 6.22005 9.58579 6.22005 10C6.22005 10.4142 6.55584 10.75 6.97005 10.75V9.25ZM10.9701 5.25H5.63672V6.75H10.9701V5.25ZM10.3034 7.25H6.30339V8.75H10.3034V7.25ZM9.63672 9.25H6.97005V10.75H9.63672V9.25Z'
          fill='white'
        />
      </svg>
      <span
        className={`text-white text-xs font-bold leading-[1.94863rem] tracking-[-0.0075rem] md:text-lg md:leading-[1.94863rem]
                md:tracking-[-0.01125rem]`}
      >
        Guardar pregunta
      </span>
    </button>
  );
}

export default SaveButton;
