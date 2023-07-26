import { createContext, useState, useEffect, useCallback } from 'react';
import {
  EmptyFormContext,
  EmptyForms,
  Forms,
  FormsContextInterface,
} from '../models';
import { useFetch } from '../../../hooks';

const FormsContext = createContext<FormsContextInterface>(EmptyFormContext);

type FormsProviderProps = { children: React.ReactNode };

const FormsProvider = ({ children }: FormsProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { fetchData, error } = useFetch();
  const [data, setData] = useState<Forms[]>(EmptyForms);

  const handleGetForms = useCallback(async () => {
    setIsLoading(true);
    const response = await fetchData('/admin/forms', 'GET');

    console.log(response);

    if (error) {
      console.log(error);
      return;
    }
    setData(response);
    setIsLoading(false);
  }, [fetchData, error]);

  useEffect(() => {
    handleGetForms();
  }, []);

  async function handleDeleteForm(id: string) {
    setIsLoading(true);
    await fetchData(`/admin/deleteForm/${id}`, 'DELETE');

    if (error) {
      console.log(error);
      return;
    }

    const filteredForms = data.filter((form) => form._id !== id);
    setData(filteredForms);
    setIsLoading(false);
  }

  function handleFilterForm(word: string) {
    const filteredForms = data.filter((form) =>
      form.title.toLowerCase().includes(word.toLowerCase())
    );
    setData(filteredForms);
  }

  return (
    <FormsContext.Provider
      value={{
        isLoading,
        setIsLoading,
        data,
        handleDeleteForm,
        handleFilterForm,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
};

export { FormsProvider };

export default FormsContext;
