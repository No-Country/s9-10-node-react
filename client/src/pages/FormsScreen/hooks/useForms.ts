import { useContext } from 'react';
import FormsContext from '../context/FormsProvider';

const useForms = () => {
  return useContext(FormsContext);
};

export default useForms;
