interface WhiteboardScreenProps {
  children: React.ReactNode;
}

function WhiteboardScreen({ children }: WhiteboardScreenProps) {
  return (
    <div
      className={`flex flex-col w-[19rem] min-h-52 rounded-[1.25rem] bg-[#E9ECFC] mx-auto my-4 md:w-[55.125rem] 
          md:min-h-[10rem] `}
    >
      {children}
    </div>
  );
}

export default WhiteboardScreen;
