"use client"

const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export async function getUserInfo() {

    try {
        const res = await fetch(`${server_url}/info`, {
            method: 'GET',
            credentials: 'include',
            headers: { "Content-Type": "application/json" }
        })

        if (!res.ok) {
            throw new Error('Failed to fetch user info');
        }

        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export async function isLoggedIn() {
    try {
        const res = await fetch(`${server_url}/dashboard`, {
            method: 'GET',
            credentials: 'include'
        });

        if (res.status === 401) {
            return false
        } else {
            return true
        }
    } catch (err) {
        console.log(err);
        return 'There was an error, I’m sorry :(';
    }
}
