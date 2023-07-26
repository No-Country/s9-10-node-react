export interface Forms {
  _id: string;
  rolesAllowed: [string];
  title: string;
  description: string;
  createdBy: string;
}

export const EmptyForms: Forms[] = [
  {
    _id: '',
    rolesAllowed: [''],
    title: '',
    description: '',
    createdBy: '',
  },
];

export interface FormsContextInterface {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  data: Forms[];
  handleDeleteForm: (id: string) => void;
  handleFilterForm: (value: string) => void;
}

export const EmptyFormContext: FormsContextInterface = {
  isLoading: false,
  setIsLoading: (value: boolean) => {
    value;
  },
  data: EmptyForms,
  handleDeleteForm: (id: string) => {
    console.log(id);
  },
  handleFilterForm: (value: string) => {
    console.log(value);
  },
};
