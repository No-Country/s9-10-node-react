import { useScreenSize } from '../../../hooks';

function Buttons() {
  const { width } = useScreenSize();

  return (
    <div className='flex items-center justify-between w-[21rem] mx-auto md:mx-0 md:w-[56rem] mt-7 md:mt-6'>
      <button
        className={`w-[10.0625rem] h-12 rounded-[6.25rem] border-[2px] border-solid border-[#73C36F] bg-[#DCF0DB] shadow-custom
        gap-[0.64956rem] flex items-center justify-center text-[#73C36F] text-lg font-bold leading-[1.94863rem] tracking-[-0.01125rem]
        md:w-28`}
      >
        <svg
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.3037 7L10.3037 12L15.3037 17'
            stroke='#73C36F'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Volver
      </button>
      <button
        className={`w-[10.0625rem] h-12 rounded-[6.25rem] border-[2px] border-solid border-[#73C36F] bg-[#DCF0DB] shadow-custom
        gap-[0.64956rem] flex items-center justify-center text-[#73C36F] text-lg font-bold leading-[1.94863rem] tracking-[-0.01125rem]
        md:w-56`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
        >
          <mask
            id='mask0_702_17364'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='24'
          >
            <rect x='0.303711' width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_702_17364)'>
            <path
              d='M11.1502 11.2501H13.4579V4.09618C13.4579 3.7744 13.346 3.50164 13.1223 3.27791C12.8986 3.05419 12.6258 2.94233 12.304 2.94233C11.9822 2.94233 11.7095 3.05419 11.4857 3.27791C11.262 3.50164 11.1502 3.7744 11.1502 4.09618V11.2501ZM5.24632 15.0577H19.3617V13.0577C19.3617 12.968 19.3329 12.8943 19.2752 12.8366C19.2175 12.7789 19.1437 12.75 19.054 12.75H5.55405C5.4643 12.75 5.39057 12.7789 5.33287 12.8366C5.27517 12.8943 5.24632 12.968 5.24632 13.0577V15.0577ZM4.12327 21.0577H6.6502V18.8077C6.6502 18.5952 6.72211 18.4171 6.86592 18.2734C7.00972 18.1296 7.18792 18.0577 7.40052 18.0577C7.61311 18.0577 7.7912 18.1296 7.9348 18.2734C8.07838 18.4171 8.15017 18.5952 8.15017 18.8077V21.0577H11.554V18.8077C11.554 18.5952 11.6259 18.4171 11.7697 18.2734C11.9136 18.1296 12.0918 18.0577 12.3043 18.0577C12.5169 18.0577 12.695 18.1296 12.8386 18.2734C12.9822 18.4171 13.054 18.5952 13.054 18.8077V21.0577H16.4579V18.8077C16.4579 18.5952 16.5298 18.4171 16.6736 18.2734C16.8174 18.1296 16.9956 18.0577 17.2082 18.0577C17.4208 18.0577 17.5989 18.1296 17.7425 18.2734C17.8861 18.4171 17.9578 18.5952 17.9578 18.8077V21.0577H20.4848C20.5873 21.0577 20.6707 21.0177 20.7348 20.9375C20.7989 20.8574 20.8149 20.7693 20.7829 20.6731L19.6675 16.5577H4.94057L3.82517 20.6731C3.79312 20.7693 3.80915 20.8574 3.87325 20.9375C3.93737 21.0177 4.02071 21.0577 4.12327 21.0577ZM20.5617 22.5577H4.04635C3.47968 22.5577 3.01879 22.3314 2.66367 21.8789C2.30854 21.4263 2.2079 20.9218 2.36175 20.3654L3.74637 15.2212V13C3.74637 12.5141 3.91656 12.101 4.25692 11.7606C4.59731 11.4203 5.01045 11.2501 5.49635 11.2501H9.6502V4.09618C9.6502 3.35902 9.90821 2.73243 10.4242 2.21641C10.9403 1.70039 11.5669 1.44238 12.304 1.44238C13.0412 1.44238 13.6678 1.70039 14.1838 2.21641C14.6998 2.73243 14.9578 3.35902 14.9578 4.09618V11.2501H19.1117C19.5976 11.2501 20.0107 11.4203 20.3511 11.7606C20.6915 12.101 20.8617 12.5141 20.8617 13V15.2212L22.2463 20.3846C22.4309 20.9346 22.3431 21.4343 21.9828 21.8837C21.6226 22.333 21.1489 22.5577 20.5617 22.5577Z'
              fill='#73C36F'
            />
          </g>
        </svg>
        {width > 768 ? 'Limpiar formulario' : 'Limpiar'}
      </button>
      <button
        className={`w-[10.0625rem] h-12 rounded-[6.25rem] border-[2px] border-solid border-[#73C36F] bg-[#DCF0DB] shadow-custom
        gap-[0.64956rem] items-center justify-center text-[#73C36F] text-lg font-bold leading-[1.94863rem] tracking-[-0.01125rem]
        md:w-56 hidden md:flex`}
      >
        Guardar Formulario
      </button>
    </div>
  );
}

export default Buttons;
