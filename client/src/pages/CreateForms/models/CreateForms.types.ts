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
  questions: Questions[];
}

export const DEFAULT_FORMS: Forms = {
  questions: [
    {
      options: [''],
      category: '',
      question: '',
      skill: '',
      type: '',
    },
  ],
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
  showInputsMessage: boolean;
  setShowInputsMessage: (value: boolean) => void;
  rolSelected: string;
  setRolSelected: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  showSuccessModal: boolean;
  setShowSuccessModal: (value: boolean) => void;
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
  showInputsMessage: false,
  setShowInputsMessage: () => {},
  rolSelected: '',
  setRolSelected: () => {},
  title: '',
  setTitle: () => {},
  description: '',
  setDescription: () => {},
  showSuccessModal: false,
  setShowSuccessModal: () => {},
};

export const ROLES = [
  {
    key: '1',
    label: 'Backend',
  },
  {
    key: '2',
    label: 'Frontend',
  },
  {
    key: '3',
    label: 'UX/UI',
  },
  {
    key: '4',
    label: 'No Code',
  },
  {
    key: '5',
    label: 'Team Leader',
  },
  {
    key: '6',
    label: 'Project Manager',
  },
];
