import axios from "axios";
const baseUrl = "/api/users";

const signin = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const exports = { signin };

export default exports;
