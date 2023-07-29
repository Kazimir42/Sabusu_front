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
            },
            body: supplier
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}
