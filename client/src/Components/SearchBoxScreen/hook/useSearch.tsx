import { useState } from 'react';
import { TermsSearch } from '../models';
import generateId from '../../../utils/idGenerator';
import { useScreenSize } from '../../../hooks';
import { tagsStore } from '../../../store';

const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const { width } = useScreenSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addTag = tagsStore((state) => state.addTags);
  const storeTags = tagsStore((state) => state.tags);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //function to create tags and add to the store
  function handleCreateTags(search: string) {
    //if the width is > 768, show only 3 tags
    const tagNumber = width > 768 ? 3 : 5;
    const id = generateId();

    if (storeTags[0]?.id === '') storeTags.splice(0, 1);

    const newTag: TermsSearch = { id, term: search };
    const searchArray = [...storeTags, newTag];

    if (searchArray.length > tagNumber) searchArray.shift();

    addTag(searchArray);
  }

  //function to clean the search input
  function clearInput() {
    setSearch('');
  }

  //function to delete a tag
  function deleteTags(id: string) {
    const tagsArray = storeTags?.filter((tag) => tag.id !== id);
    addTag(tagsArray);
  }

  return {
    search,
    setSearch,
    handleCreateTags,
    clearInput,
    isOpen,
    setIsOpen,
    toggleMenu,
    deleteTags,
  };
};

export default useSearch;
