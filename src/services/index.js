export const API_URL = import.meta.env.VITE_API_URL;

export async function register({ data }) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function login({ data }) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function addJob({ data }) {
    const response = await fetch(`${API_URL}/job`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`
        }
    });
    return response;
}