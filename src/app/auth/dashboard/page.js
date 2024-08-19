'use client'
import styles from "./dashboard.module.sass";
import Navbar from "../../components/navbar/page.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/app/actions/account.js";
import dotenv from 'dotenv'

dotenv.config()
const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Dashboard() {

  const [message, setMessage] = useState('')
  const [userInfo, setUserInfo] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleDashboard = async () => {
      // Checks if user is logged in or not
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

      //Calls a function that fetches user information
      const userInfo = await getUserInfo()
      setUserInfo(userInfo)
    }
    handleDashboard()
  })
  //Just so I dont have to constatly write userInfo.user :P
  const user = userInfo.user;

  return (
    <main className={styles.main}>
        <Navbar />
        <div className={styles.Content}>
          <h1>YOU ARE ON YOUR DASHBOARD :))</h1>
          <h1>{message || 'Loading...'}</h1> {/* Display loading text until message is fetched */}

          {user ? (
          <div>
            <p>User Info:</p>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
          </div>
        ) : (
          <p>Loading user info...</p>  // Loading indicator
        )}

          <div>
            <img className={styles.wip} src="/home/WIP.png" alt="Work in Process" />
          </div>
        </div>
    </main>
  );
}