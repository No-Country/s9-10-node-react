import axios from "axios";

export const registerRequest = async (email: string, username: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:8000/api/users/register", {
      email,
      username,
      password
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      throw new Error(error.response?.data?.message || "Error in registerRequest");
    } else {
      throw new Error("Error in registerRequest");
    }
  }
};

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:8000/api/users/login", {
      email,
      password
    },{withCredentials: true});
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error in loginRequest");
    } else {
      throw new Error("Error in loginRequest");
    }
  }
};

export const profileRequest = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/users/profile",{ withCredentials: true });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Error in profileRequest");
    } else {
      throw new Error("Error in profileRequest");
    }
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/users/profile");
    return response.data;
  } catch (error) {
    throw new Error("Error retrieving user profile");
  }
};

export const logoutRequest = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/logout");
      return response.data;
    } catch (error) {
      throw new Error("Error in logoutRequest");
    }
  };
