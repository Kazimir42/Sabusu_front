import axios from 'axios'

export function fetchSubscriptions() {
    return axios
        .get('http://localhost/api/subscriptions', {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error)
        })
}
