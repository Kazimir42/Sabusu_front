import axios from "axios";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";
import { getApiTokenFromCookie } from "@/api/api";

export function fetchSuppliers(categoryId) {
    return axios
        .get("http://localhost/api/categories/" + categoryId + "/suppliers", {
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
            console.error(error);
        });
}


export function createSupplier(categoryId, supplier) {
    const token = getApiTokenFromCookie();

    return axios
        .post("http://localhost/api/categories/" + categoryId + "/suppliers", supplier, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}

export function fetchSuppliersForUser(userId) {
    return axios
        .get("http://localhost/api/users/" + userId + "/suppliers", {
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
            console.error(error);
        });
}

export function fetchSupplierForUser(userId, id) {
    return axios
        .get("http://localhost/api/users/" + userId + "/suppliers/" + id, {
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
            console.error(error);
        });
}


export function deleteSupplierForUser(userId, id) {
    const token = getApiTokenFromCookie();

    return axios
        .delete("http://localhost/api/users/" + userId + "/suppliers/" + id, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}
