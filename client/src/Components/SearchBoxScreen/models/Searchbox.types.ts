export interface TermsSearch {
  id: string;
  term: string;
}

export interface SearchBoxPropsBase {
  handleSearch: (search: string) => void;
}

export interface SearchBoxProps {
  showSelect: boolean;
  handleSearch: (search: string) => void;
  showButton: boolean;
  label: string;
  handleCreate?: () => void;
  buttonLabel?: string;
}

export const searchOptions: TermsSearch[] = [
  { id: '1', term: 'Ultimo mes' },
  {
    id: '2',
    term: 'Últimos 3 meses',
  },
  {
    id: '3',
    term: 'Últimos 6 meses',
  },
];

export const TAGS: TermsSearch[] = [
  {
    id: '',
    term: '',
  },
];
