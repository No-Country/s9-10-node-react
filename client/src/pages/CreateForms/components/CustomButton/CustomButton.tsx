interface CustomButtonProps {
  isSelected?: number;
  id?: number;
  label: string;
  isEnabled: boolean;
  handleClick?: () => void;
  handleGetId: (id: number) => void;
}

function CustomButton({
  isSelected = 0,
  id = 1000,
  label,
  isEnabled,
  handleClick,
  handleGetId,
}: CustomButtonProps) {
  return (
    <button
      className={`flex items-center justify-center w-[21rem] h-10 rounded-[0.625rem] text-black text-xl font-normal
          leading-7 tracking-[-0.0275rem] hover:bg-[#7A8CEB] transition-colors duration-300 ${
            !isEnabled && 'disabled:bg-slate-400'
          } md:w-[13rem] md:h-14 md:text-base md:leading-6 md:tracking-[-0.022rem] ${
        isSelected === id ? 'bg-[#7A8CEB]' : 'bg-[#E9ECFC]'
      }`}
      onClick={() => {
        handleClick();
        handleGetId(id);
      }}
      disabled={!isEnabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
