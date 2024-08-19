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
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}