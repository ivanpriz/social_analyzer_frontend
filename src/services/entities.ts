import axios from "axios";
const baseUrl = "/api/v1/entities"


const getAll = () => {
    return axios.get(baseUrl)
}

export { getAll }