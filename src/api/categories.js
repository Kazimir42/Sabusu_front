import axios from "axios";

export function fetchCategories() {
    return axios
        .get("http://localhost/api/categories", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return Promise.reject(error.response.data.errors);
        });
}

export function fetchCategoriesForUser(userId) {
    return axios
        .get("http://localhost/api/users/" + userId + "/categories", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return Promise.reject(error.response.data.errors);
        });
}
