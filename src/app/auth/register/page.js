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

    try {
      
      const res = await fetch(`${server_url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      })

      const data = await res.text();
      setMessage(data);

    } catch (err) {
      console.error("Error during registration:", err);
      setMessage("Registration failed. Please try again.");
    }

  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.Content}>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <label>username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required />

          <label>password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Submit</button>
        </form>
        <a href="login">login</a>
        {message && <p>{message}</p>}

        <div>
          <img className={styles.wip} src="/home/WIP.png" alt="Work in Process" />
        </div>
      </div>
    </main>
  );
}