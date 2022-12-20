import axios from "axios";
const url = "/api/users";

const register = async (credentials) => {
    const response = await axios.post(url, credentials);
    return response.data;
};

const exports = { register };

export default exports;
