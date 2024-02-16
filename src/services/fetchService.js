import { Password } from "@mui/icons-material";

export const getAllUsers= async ()=>{
    let response = await fetch('https://reqres.in/api/users')
    console.log('Response: ', response);
    console.log('Status:', response.status);
    console.log('ok?: ',response.ok);
    
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log('Response: ', response);
    console.log('Status:', response.status);
    console.log('ok?: ', response.ok);

    return response.json()
}

export const getUserDetails = async (id)=>{
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log('Response: ', response);
    console.log('Status:', response.status);
    console.log('ok?: ', response.ok);

    return response.json()
}

export const login = async (email, password) =>{
    let body={
        email: email, 
        password: password
    }
    let response = await fetch('https://reqres.in/api/login', {
        methods: 'POST',
        // mode:'no-cors',
        // credentials:'omit', 
        // cache:'no-cache',
        // headers: {
        //     'content-type':'application/json'
        // },
        body:  JSON.stringify (body),
    })
    console.log('Response: ', response);
    console.log('Status:', response.status);
    console.log('ok?: ', response.ok);
    return response.json()
    }

