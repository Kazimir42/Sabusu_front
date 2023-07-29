export const API_ROUTE = "http://localhost/";

export function getApiTokenFromCookie() {
    const cookies = document.cookie.split(";");
    let apiToken = null;

    cookies.forEach(cookie => {
        const cookieParts = cookie.trim().split("=");
        const cookieName = cookieParts[0];

        if (cookieName === "laravel_session") {
            apiToken = cookieParts[1];
        }
    });

    return apiToken;
}
