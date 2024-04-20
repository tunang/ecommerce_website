import axios from "../services/custom-axios"

const loginApi = (email, password) =>{
    return axios.post("https://reqres.in/api/login", {email, password})
}

export { loginApi }