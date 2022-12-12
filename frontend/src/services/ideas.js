import axios from "axios";
const url = "/api/ideas";

const getIdeas = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createIdea = async (content) => {
  const response = await axios.post(url, content);
  return response.data;
};

const deleteIdea = async (ideaId) => {
  const response = await axios.delete(url, { data: ideaId });
  return response.data;
};

const exports = { getIdeas, createIdea, deleteIdea };

export default exports;
