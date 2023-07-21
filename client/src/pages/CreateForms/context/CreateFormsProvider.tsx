import { createContext, useState } from 'react';
import { CreateFormsContextInterface, EmptyContext } from '../models';

const CreateFormsContext =
  createContext<CreateFormsContextInterface>(EmptyContext);

type CreateFormsProviderProps = { children: React.ReactNode };

const CreateFormsProvider = ({ children }: CreateFormsProviderProps) => {
  const [isSelected, setIsSelected] = useState<number>(0);

  return (
    <CreateFormsContext.Provider
      value={{
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </CreateFormsContext.Provider>
  );
};

export { CreateFormsProvider };

export default CreateFormsContext;
