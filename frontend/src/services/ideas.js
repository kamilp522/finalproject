import axios from "axios";
const url = "/api/ideas";

const createIdea = async (content) => {
  console.log(content);
  const response = await axios.post(url, content);
  return response.data;
};

const exports = { createIdea };

export default exports;
