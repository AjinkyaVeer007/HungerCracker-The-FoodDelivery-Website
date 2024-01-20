import axios from "axios";

export const useGlobalApiHandler = () => {
  return async function (data) {
    try {
      const response = await axios[data?.method](data?.url);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };
};
