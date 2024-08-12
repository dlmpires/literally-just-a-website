'use client'
import styles from "./login.module.sass";
import Navbar from "../../components/navbar/page.js"
import React, { useState } from "react";
import dotenv from 'dotenv'
import { useRouter } from 'next/navigation'

const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    dotenv.config()
    const router = useRouter();

    const handleLogin = async event => {
        event.preventDefault();

            const res = await fetch(`${server_url}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
              })

              const data = await res.text();
              setMessage(data);
        
              if (res.ok) {
                console.log('Login successful:');
                router.push('dashboard');
              }
        
    }
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.Content}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label>username</label>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required/>

            <label>password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>

            <button type="submit">Submit</button>
        </form>
        <a href="register">registra</a>
        {message && <p>{message}</p>}

        <div>
          <img className={styles.wip} src="/home/WIP.png" alt="Work in Process"/>
        </div>
      </div>
    </main>
  );
}