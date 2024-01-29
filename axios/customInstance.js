import axios from "axios";

const custAxios = axios.create({
    baseURL:"http://localhost:5000/api/tasks"
})

export default custAxios