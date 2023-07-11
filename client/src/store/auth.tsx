import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      setToken: (newToken: string) => set({ token: newToken }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
