import axios from "axios";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";

const csrf = () => axios.get('/sanctum/csrf-cookie')

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
    const token = getApiTokenFromCookie(); // Remplacez getApiTokenFromCookie() par la fonction pour obtenir le jeton API du cookie

    return axios
        .post("http://localhost/api/subscriptions", subscription, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Authorization": `Bearer ${token}`, // Inclure le jeton API dans l'en-tête Authorization
            },
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}

function getApiTokenFromCookie() {
    const cookies = document.cookie.split(';');
    let apiToken = null;

    cookies.forEach(cookie => {
        const cookieParts = cookie.trim().split('=');
        const cookieName = cookieParts[0];

        if (cookieName === 'laravel_session') {
            apiToken = cookieParts[1];
        }
    });

    return apiToken;
}
