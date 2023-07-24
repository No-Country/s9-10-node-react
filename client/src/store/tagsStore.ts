import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TermsSearch, TAGS } from '../Components/SearchBoxScreen/models';

interface TagsStore {
  tags: TermsSearch[];
  addTags: (tags: TermsSearch[]) => void;
  removeTag: () => void;
}

/* The code is creating a user store using the Zustand library. Zustand is a state management library
for React that allows you to create stores and manage state in a simple and efficient way. */
const tagStore = create<TagsStore>()(
  persist(
    (set) => ({
      tags: TAGS,
      addTags: (tags: TermsSearch[]) => set({ tags }),
      removeTag: () => {
        tagStore.persist.clearStorage();
      },
    }),
    {
      name: 'tagsFeedback',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default tagStore;
