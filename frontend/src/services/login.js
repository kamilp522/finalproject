import axios from "axios";
const url = "/api/login";

const login = async (credentials) => {
  const response = await axios.post(url, credentials);
  return response.data;
};

const exports = { login };

export default exports;
