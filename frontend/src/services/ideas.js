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

const deleteIdea = async (deleteReqData) => {
    const response = await axios.delete(url, { data: deleteReqData });
    return response.data;
};

const exports = { getIdeas, createIdea, deleteIdea };

export default exports;
