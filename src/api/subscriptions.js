import axios from "axios";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";
import { getApiTokenFromCookie } from "@/api/api";

export function fetchSubscriptions() {
    return axios
        .get("http://localhost/api/subscriptions", {
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

export function fetchSubscription(id) {
    return axios
        .get("http://localhost/api/subscriptions/" + id, {
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

export function createSubscription(subscription) {
    const token = getApiTokenFromCookie();

    return axios
        .post("http://localhost/api/subscriptions", subscription, {
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

