import axios from 'axios'
import DEFAULT_URL from './Default'

console.log(DEFAULT_URL)
export const GetAllTasks = async() => {
    const response = await axios.get(DEFAULT_URL)
    return response.data;
}

export const GetTask = async(id) => {
    return await axios.get(`${DEFAULT_URL}/${id}`)
}

export const PostTask = async(data) => {
    return await axios.post(DEFAULT_URL, data)
}

export const PatchTask = async(id, data) => {
    console.log("id", id)
    console.log("data", data)
    return await axios.patch(`${DEFAULT_URL}/${id}`, data)
}

export const DeleteTask = async(id) => {
    return await axios.delete(`${DEFAULT_URL}/${id}`)
}
