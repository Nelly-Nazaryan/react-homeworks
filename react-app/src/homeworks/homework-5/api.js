import axios from "axios";

const API_ENDPOINT = "https://crudcrud.com/api/8ab7988cbc3a4391a2285739dcb47f3b/";

export const createUser = (data) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return axios.post(`${API_ENDPOINT}users`, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        data,
    });
};

export const getUserById = (id) => {
    return axios.get(`${API_ENDPOINT}users/${id}`);
};

export const getUsers = () => {
    return axios.get(`${API_ENDPOINT}users`);
};

export const signIn = async ({ email, password })=> {
    const result = await getUsers()
    if(result.data){
        const arr = []

        arr.push(result.data.filter(user => user.email === email))
        if(arr[0]){
            localStorage.setItem("token", arr[0][0]._id)
            window.location.reload()
        }
    }
}

export const api = {
    createUser,
    getUserById,
    getUsers,
    signIn,
}