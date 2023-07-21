export interface CreateFormsContextInterface {
  isSelected: number;
  setIsSelected: (value: number) => void;
}

export const EmptyContext: CreateFormsContextInterface = {
  isSelected: 0,
  setIsSelected: () => {},
};
