import axios from "axios";
/* import { useAuthStore } from "../store/auth"; */
axios.defaults.withCredentials = true;
const authApi = axios.create({
  baseURL: "http://localhost:8000/api/",
});

/* const updateAuthHeader = () => {
  const token = useAuthStore.getState().token;
  authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

useAuthStore.subscribe(updateAuthHeader);  */

export default authApi;


