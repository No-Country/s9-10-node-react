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

  maxCharacters: string;
  setMaxCharacters: (value: string) => void;
  saveOpenQuestion: () => void;
  scaleStart: string;
  setScaleStart: (value: string) => void;
  scaleEnd: string;
  setScaleEnd: (value: string) => void;
  scaleStep: string;
  setScaleStep: (value: string) => void;
  saveScaleQuestion: () => void;
  handleClearLocalStorage: () => void;
  handleSaveForm: () => void;
  showAlert: boolean;
  setShowAlert: (value: boolean) => void;
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
  maxCharacters: '',
  setMaxCharacters: () => {},
  saveOpenQuestion: () => {},
  scaleStart: '',
  setScaleStart: () => {},
  scaleEnd: '',
  setScaleEnd: () => {},
  scaleStep: '',
  setScaleStep: () => {},
  saveScaleQuestion: () => {},
  handleClearLocalStorage: () => {},
  handleSaveForm: () => {},
  showAlert: false,
  setShowAlert: () => {},
};
