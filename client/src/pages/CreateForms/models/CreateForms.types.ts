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
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const EmptyContext: CreateFormsContextInterface = {
  isSelected: 0,
  setIsSelected: (value: number) => {
    value;
  },
  question: '',
  setQuestion: (value: string) => {
    value;
  },
  clearInputQuestion: () => {
    () => console.log('clear');
  },
  radioButtons: DEFAULT_RADIO_BUTTONS,
  setRadioButtons: (radioButtons: DefaultRadioButtons) => {
    radioButtons;
  },
  addRadioButtons: () => {
    () => console.log('add');
  },
  saveOptionsQuestion: () => {
    () => console.log('save');
  },
  handleOptionInputChange: () => {
    () => console.log('change');
  },
  maxCharacters: '',
  setMaxCharacters: (value: string) => {
    value;
  },
  saveOpenQuestion: () => {
    () => console.log('save');
  },
  scaleStart: '',
  setScaleStart: (value: string) => {
    value;
  },
  scaleEnd: '',
  setScaleEnd: (value: string) => {
    value;
  },
  scaleStep: '',
  setScaleStep: (value: string) => {
    value;
  },
  saveScaleQuestion: () => {
    () => console.log('save');
  },
  handleClearLocalStorage: () => {
    () => console.log('clear');
  },
  handleSaveForm: () => {
    () => console.log('save');
  },
  showAlert: false,
  setShowAlert: (value: boolean) => {
    value;
  },
  showInputsMessage: false,
  setShowInputsMessage: (value: boolean) => {
    value;
  },
  rolSelected: '',
  setRolSelected: (value: string) => {
    value;
  },
  title: '',
  setTitle: (value: string) => {
    value;
  },
  description: '',
  setDescription: (value: string) => {
    value;
  },
  showSuccessModal: false,
  setShowSuccessModal: (value: boolean) => {
    value;
  },
  loading: false,
  setLoading: (value: boolean) => {
    value;
  },
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
