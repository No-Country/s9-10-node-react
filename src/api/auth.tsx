import axios from "axios";

export const loginRequest = async (email: string, username: string, password: string) => {
    return axios.post('http://localhost:8000/api/users/register', {
        email,
        username, 
        password
    });
};

export const profileRequest = async () => {
    return await axios.get('http://localhost:8000/api/users/profile')
}