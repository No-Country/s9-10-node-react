interface CustomButtonProps {
  label: string;
  isEnabled: boolean;
  handleClick?: () => void;
}

function CustomButton({ label, isEnabled, handleClick }: CustomButtonProps) {
  return (
    <button
      className={`flex items-center justify-center w-[21rem] h-10 rounded-[0.625rem] bg-[#E9ECFC] text-black text-xl font-normal
          leading-7 tracking-[-0.0275rem] hover:bg-[#7A8CEB] transition-colors duration-300 ${
            !isEnabled && 'disabled:bg-slate-400'
          } md:w-[13rem] md:h-14 md:text-base md:leading-6 md:tracking-[-0.022rem]`}
      onClick={handleClick}
      disabled={!isEnabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
