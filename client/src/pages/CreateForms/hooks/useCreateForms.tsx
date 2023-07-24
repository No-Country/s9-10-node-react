import { useContext } from 'react';
import CreateFormsContext from '../context/CreateFormsProvider';

const useCreateForms = () => {
  return useContext(CreateFormsContext);
};

export default useCreateForms;
