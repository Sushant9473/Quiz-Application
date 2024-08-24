const { default: axiosInstance } = require(".");
const baseUrl = "https://quiz-application-9p3q.onrender.com";
export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      baseUrl + "/api/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      baseUrl + "/api/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post(
      baseUrl + "/api/users/get-user-info"
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
