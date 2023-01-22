import axios from "axios";

const API_ENDPOINT = "https://crudcrud.com/api/3eac3bdf23bb49aa98efffca0ef83a1d/";

export const createUser = (data) => {
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
