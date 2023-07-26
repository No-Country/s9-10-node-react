import { createContext, useState, useEffect } from 'react';
import { message } from 'antd';
import {
  CreateFormsContextInterface,
  DEFAULT_FORMS,
  DEFAULT_RADIO_BUTTONS,
  EmptyContext,
  Forms,
} from '../models';
import { useFetch } from '../../../hooks';
import { userStore } from '../../../store';

const CreateFormsContext =
  createContext<CreateFormsContextInterface>(EmptyContext);

type CreateFormsProviderProps = { children: React.ReactNode };

const CreateFormsProvider = ({ children }: CreateFormsProviderProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isSelected, setIsSelected] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const [radioButtons, setRadioButtons] = useState<{ [key: string]: string }>(
    DEFAULT_RADIO_BUTTONS
  );
  const { fetchData, error } = useFetch();
  const [form, setForm] = useState<Forms>(DEFAULT_FORMS);
  const [maxCharacters, setMaxCharacters] = useState<string>('');
  const [scaleStart, setScaleStart] = useState<string>('');
  const [scaleEnd, setScaleEnd] = useState<string>('');
  const [scaleStep, setScaleStep] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showInputsMessage, setShowInputsMessage] = useState<boolean>(false);
  const [rolSelected, setRolSelected] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const user = userStore((state) => state.user);

  // function to reset the state
  function clearInputQuestion() {
    setQuestion('');
  }

  // function to add a new input to the state
  function addRadioButtons() {
    const newInputName = `input${Object.keys(radioButtons).length + 1}`;
    setRadioButtons((prevValues) => ({
      ...prevValues,
      [newInputName]: '',
    }));
  }

  //function to get the value from the input
  function handleOptionInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRadioButtons((prevValues) => ({ ...prevValues, [name]: value }));
  }

  //function to get the localStorage
  async function handleGetLocalStorage() {
    const questionsForm = localStorage.getItem('form');
    if (questionsForm) {
      setForm(JSON.parse(questionsForm));
    }
  }

  useEffect(() => {
    handleGetLocalStorage();
  }, []);

  //function to save the optionsQuestion
  function saveOptionsQuestion() {
    const questionType: string = isSelected === 1 ? 'closed' : 'multiple';

    //get the values from the radioButtons
    const valuesArray = Object.values(radioButtons);

    //validate if the values are empty
    if (valuesArray.includes('')) {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar al menos 2 opciones',
      });
      return;
    }

    if (question === '') {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar una pregunta',
      });
      return;
    }

    //create the data to send to the localStorage
    const data = {
      type: questionType,
      question: question,
      options: valuesArray,
      category: 'technical skills',
      skill: 'HTML',
    };
    handleGetLocalStorage();

    //push the data to the localStorage
    form.questions.push(data);
    //if the first question is empty, remove it
    if (form?.questions[0]?.question === '') form.questions.splice(0, 1);
    //set new form
    setForm(form);
    //save to localStorage
    localStorage.setItem('form', JSON.stringify(form));

    //reset the state
    setRadioButtons(DEFAULT_RADIO_BUTTONS);
    clearInputQuestion();
    messageApi.open({
      type: 'success',
      content:
        'Tu pregunta ha sido almacenada temporalmente, para guardarla en la base de datos, presiona el botón de "Guardar Formulario"',
    });
  }

  // function to save the openQuestion
  function saveOpenQuestion() {
    //create the data to send to the localStorage
    const data = {
      type: 'open',
      question: question,
      options: [maxCharacters],
      category: 'technical skills',
      skill: 'HTML',
    };

    handleGetLocalStorage();

    //validate if the values are empty
    if (question === '') {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar una pregunta',
      });
      return;
    }
    if (maxCharacters === '') {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar una el máximo de caracteres permitidos',
      });
      return;
    }

    //push the data to the localStorage
    form.questions.push(data);
    //if the first question is empty, remove it
    if (form?.questions[0]?.question === '') form.questions.splice(0, 1);
    //set new form
    setForm(form);
    //save to localStorage
    localStorage.setItem('form', JSON.stringify(form));

    //reset the state
    setMaxCharacters('');
    clearInputQuestion();
    messageApi.open({
      type: 'success',
      content:
        'Tu pregunta ha sido almacenada temporalmente, para guardarla en la base de datos, presiona el botón de "Guardar Formulario"',
    });
  }

  // function to save the scaleQuestion
  function saveScaleQuestion() {
    //create the data to send to the localStorage
    const data = {
      type: 'scale',
      question: question,
      options: [scaleStep],
      scaleRange: {
        min: Number(scaleStart),
        max: Number(scaleEnd),
      },
      category: 'technical skills',
      skill: 'HTML',
    };

    handleGetLocalStorage();

    //validate if the values are empty
    if (question === '') {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar una pregunta',
      });
      return;
    }
    if (scaleEnd === '' || scaleStart === '' || scaleStep === '') {
      messageApi.open({
        type: 'error',
        content: 'Debes ingresar los valores de la escala',
      });
      return;
    }

    form.questions.push(data);
    if (form?.questions[0]?.question === '') form.questions.splice(0, 1);
    setForm(form);
    localStorage.setItem('form', JSON.stringify(form));
    setScaleStart('');
    setScaleEnd('');
    setScaleStep('');
    clearInputQuestion();
    messageApi.open({
      type: 'success',
      content:
        'Tu pregunta ha sido almacenada temporalmente, para guardarla en la base de datos, presiona el botón de "Guardar Formulario"',
    });
  }

  //function to clear the localStorage and reset the state
  function handleClearLocalStorage() {
    localStorage.removeItem('form');
    setScaleStart('');
    setScaleEnd('');
    setScaleStep('');
    clearInputQuestion();
    setMaxCharacters('');
    setRadioButtons(DEFAULT_RADIO_BUTTONS);
    setRolSelected('');
    setTitle('');
    setDescription('');
  }

  //function to save the form in the DB
  async function handleSaveForm() {
    handleGetLocalStorage();

    const newData = {
      title: title,
      description: description,
      rolesAllowed: [rolSelected],
      comments: { praise: false, normal: false },
      questions: form.questions,
      createdBy: user.username,
    };
    console.log(newData);
    const result = await fetchData('/admin/form', 'POST', newData);

    if (error) {
      messageApi.open({
        type: 'error',
        content: error,
      });
      return;
    }

    console.log(result);

    setShowSuccessModal(true);
    handleClearLocalStorage();
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
        maxCharacters,
        setMaxCharacters,
        saveOpenQuestion,
        scaleStart,
        setScaleStart,
        scaleEnd,
        setScaleEnd,
        scaleStep,
        setScaleStep,
        saveScaleQuestion,
        handleClearLocalStorage,
        handleSaveForm,
        showAlert,
        setShowAlert,
        showInputsMessage,
        setShowInputsMessage,
        rolSelected,
        setRolSelected,
        title,
        setTitle,
        description,
        setDescription,
        showSuccessModal,
        setShowSuccessModal,
      }}
    >
      {contextHolder}
      {children}
    </CreateFormsContext.Provider>
  );
};

export { CreateFormsProvider };

export default CreateFormsContext;
