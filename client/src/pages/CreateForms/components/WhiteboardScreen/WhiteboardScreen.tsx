import { Loader } from '../../../../Components';
import { useCreateForms } from '../../hooks';

interface WhiteboardScreenProps {
  children: React.ReactNode;
}

function WhiteboardScreen({ children }: WhiteboardScreenProps) {
  const { loading } = useCreateForms();

  return (
    <div
      className={`flex flex-col w-[19rem] min-h-52 rounded-[1.25rem] bg-[#E9ECFC] mx-auto my-4 md:w-[55.125rem] 
          md:min-h-[10rem] `}
    >
      {loading && <Loader />}
      {children}
    </div>
  );
}

export default WhiteboardScreen;
