import { createContext, useState } from 'react';
import {
  CreateFormsContextInterface,
  DEFAULT_FORMS,
  DEFAULT_RADIO_BUTTONS,
  EmptyContext,
  Forms,
} from '../models';
import { useFetch } from '../../../hooks';

const CreateFormsContext =
  createContext<CreateFormsContextInterface>(EmptyContext);

type CreateFormsProviderProps = { children: React.ReactNode };

const CreateFormsProvider = ({ children }: CreateFormsProviderProps) => {
  const [isSelected, setIsSelected] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const [radioButtons, setRadioButtons] = useState<{ [key: string]: string }>(
    DEFAULT_RADIO_BUTTONS
  );
  //const { fetchData, error } = useFetch();
  const [form, setForm] = useState<Forms>(DEFAULT_FORMS);

  function clearInputQuestion() {
    setQuestion('');
  }

  function addRadioButtons() {
    const newInputName = `input${Object.keys(radioButtons).length + 1}`;
    setRadioButtons((prevValues) => ({
      ...prevValues,
      [newInputName]: '',
    }));
  }

  function handleOptionInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRadioButtons((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleGetLocalStorage() {
    const form = localStorage.getItem('form');
    if (form) {
      setForm(JSON.parse(form));
    }
  }

  async function saveOptionsQuestion() {
    const questionType: string = isSelected === 1 ? 'closed' : 'multiple';

    const valuesArray = Object.values(radioButtons);

    const data = {
      type: questionType,
      question: question,
      options: valuesArray,
      category: 'technical skills',
      skill: 'HTML',
    };
    handleGetLocalStorage();

    form.questions.push(data);
    if (form?.questions[0]?.question === '') form.questions.splice(0, 1);
    setForm(form);
    localStorage.setItem('form', JSON.stringify(form));
  }

  return (
    <CreateFormsContext.Provider
      value={{
        isSelected,
        setIsSelected,
        question,
        setQuestion,
        clearInputQuestion,
        radioButtons,
        setRadioButtons,
        addRadioButtons,
        saveOptionsQuestion,
        handleOptionInputChange,
        form,
        setForm,
      }}
    >
      {children}
    </CreateFormsContext.Provider>
  );
};

export { CreateFormsProvider };

export default CreateFormsContext;
