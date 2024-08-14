'use client'
import styles from "./dashboard.module.sass";
import Navbar from "../../components/navbar/page.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dotenv from 'dotenv'

dotenv.config()
const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Dashboard() {

  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleDashboard = async () => {
      const res = await fetch(`${server_url}/dashboard`, {
        method: 'GET',
        credentials: 'include'
      })

      if (res.status === 401) {
        router.push('login')
      } else {
        const data = await res.json()
        setMessage(data.message)
      }
    }
    handleDashboard()
  })

  return (
    <main className={styles.main}>
        <Navbar />
        <script>
        <div className={styles.Content}>
          <h1>YOU ARE ON YOUR DASHBOARD :))</h1>
          <h1>{message || 'Loading...'}</h1> {/* Display loading text until message is fetched */}

          <div>
            <img className={styles.wip} src="/home/WIP.png" alt="Work in Process" />
          </div>
        </div>
      </script>
      <noscript>You dont have js :((</noscript>
    </main>
  );
}