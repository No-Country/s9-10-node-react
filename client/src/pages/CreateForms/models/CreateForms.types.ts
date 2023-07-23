export interface DefaultRadioButtons {
  [key: string]: string;
}

export const DEFAULT_RADIO_BUTTONS = {
  input1: '',
  input2: '',
};

interface Questions {
  options?: string[];
  category: string;
  question: string;
  skill: string;
  type: string;
  scaleRange?: {
    min?: number;
    max?: number;
  };
}

export interface Forms {
  title: string;
  questions: Questions[];
  comments: string;
}

export const DEFAULT_FORMS: Forms = {
  title: '',
  questions: [
    {
      options: [''],
      category: '',
      question: '',
      skill: '',
      type: '',
    },
  ],
  comments: '',
};

export interface CreateFormsContextInterface {
  isSelected: number;
  setIsSelected: (value: number) => void;
  question: string;
  setQuestion: (value: string) => void;
  clearInputQuestion: () => void;
  radioButtons: DefaultRadioButtons;
  setRadioButtons: (radioButtons: DefaultRadioButtons) => void;
  addRadioButtons: () => void;
  saveOptionsQuestion: () => void;
  handleOptionInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: Forms;
  setForm: (value: Forms) => void;
}

export const EmptyContext: CreateFormsContextInterface = {
  isSelected: 0,
  setIsSelected: () => {},
  question: '',
  setQuestion: () => {},
  clearInputQuestion: () => {},
  radioButtons: DEFAULT_RADIO_BUTTONS,
  setRadioButtons: (radioButtons: DefaultRadioButtons) => {},
  addRadioButtons: () => {},
  saveOptionsQuestion: () => {},
  handleOptionInputChange: () => {},
  form: DEFAULT_FORMS,
  setForm: () => {},
};
