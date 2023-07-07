import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import service from "../libs/axios";
type State = {
  token: string;
  user: any;
};

type Actions = {
  setToken: (token: string) => void;
  getSession:() => void;
  isLogged: () => boolean;
};

export const useAuthStore = create(persist<State & Actions>(
    (set) => ({
        token:"",
        user: null,
        setToken: (newToken: string) => set({ token: newToken }),
        getSession: ():void => {
          service.get("/users/session").then((res) => {
            set({ user: res.data.user });
          }).catch((err) => {
            console.log(err)
            set({ user: null });
          })
        },
        isLogged: (): boolean => {
          return !!useAuthStore.getState().user;
        }
}), {
  name: 'auth'
    }
))


