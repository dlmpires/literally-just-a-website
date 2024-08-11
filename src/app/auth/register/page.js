'use client'
import styles from "./register.module.sass";
import Navbar from "../../components/navbar/page.js"
import { useState } from "react";
import dotenv from 'dotenv'

const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    dotenv.config()
    

    const handleRegister = async (event) => {
        event.preventDefault();

        const res = await fetch(`${server_url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password}),
            credentials: 'include'
        })
    }

  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.Content}>
        
        <form onSubmit={handleRegister}>
            <label>username</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>

            <label>password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

            <button type="submit">Submit</button>
        </form>

        <div>
          <img className={styles.wip} src="/home/WIP.png" alt="Work in Process"/>
        </div>
      </div>
    </main>
  );
}