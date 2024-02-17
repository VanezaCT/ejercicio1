import axios from "axios";

export const login = (email, password)=>{

    let body ={
        email:email,
        password: password
    }

    return axios.post('https://reqres.in/api/login', body)
}

// TODO: OBTAIN ALL USER

export const getAllUser = () => {
    return axios.get('https://reqres.in/api/users')
}

// TODO: OBTAIN PAGED USER
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO: OBTAIN USER BY ID
export const getUsersByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO: CREATE USER
export const createUser = (id,name, job) => {
    
    let body = {
        name: name,
        job: job
    }

    return axios.post(`https://reqres.in/api/users/${id}`, body)
}

//TODO: UPDATE USER
export const updateUser = (id, name, job) => {

    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//TODO: DELETE USER
export const deleteUser = (id, name, job) => {

    return axios.put(`https://reqres.in/api/users/${id}`)
}
