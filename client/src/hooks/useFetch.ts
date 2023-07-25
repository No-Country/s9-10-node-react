import axios from 'axios';
import { useState } from 'react';
import { useAuthStore } from '../store/auth';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const token = useAuthStore((state) => state.token);

  /**
   * fetches data from a specified URL using the
   * specified HTTP method and optional request body, and handles loading, error, and response data.
   * @param {string} url - The `url` parameter is a string that represents the URL of the API endpoint
   * you want to fetch data from.
   * @param {string} method - The `method` parameter is a string that specifies the HTTP method to be
   * used for the request. It can be one of the following: "GET", "POST", "PUT", "PATCH", or "DELETE".
   * @param {any} [body] - The `body` parameter is an optional parameter that represents the data to be
   * sent in the request body. It is used when making requests that require a payload, such as POST or
   * PUT requests. If no data is needed in the request body, the `body` parameter can be omitted.
   * @returns the data received from the server, if the request is successful. If there is an error, it
   * will log the error message and set the error state.
   */
  async function fetchData(url: string, method: string, body?: any) {
    /* Creating a new instance of the AbortController class. */
    const abortController = new AbortController();

    //axios options
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body ? body : null,
      signal: abortController.signal,
    };

    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const result = await axios(
        `${import.meta.env.VITE_SERVER_URL}${url}`,
        options
      );
      return result.data;
    } catch (err: any) {
      console.log(err.response.data[0] || err.message);
      setError(err.response.data[0] || err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    fetchData,
    isLoading,
    error,
  };
};

export default useFetch;
