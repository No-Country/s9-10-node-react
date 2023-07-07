import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  createdAt: string;
  email: string;
  updateAt: string;
  username: string;
}

interface UserStore {
  user: User;
  addUser: (user: User) => void;
  removeUserInfo: () => void;
}

const EmptyUser: User = {
  id: '',
  createdAt: '',
  email: '',
  updateAt: '',
  username: '',
};

/* The code is creating a user store using the Zustand library. Zustand is a state management library
for React that allows you to create stores and manage state in a simple and efficient way. */
const userStore = create<UserStore>()(
  persist(
    (set) => ({
      user: EmptyUser,
      addUser: (user: User) => set({ user }),
      removeUserInfo: () => {
        userStore.persist.clearStorage();
      },
    }),
    {
      name: 'userFeedback',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default userStore;
