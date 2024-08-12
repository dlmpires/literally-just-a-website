'use client'
import styles from "./dashboard.module.sass";
import Navbar from "../../components/navbar/page.js"
import { useState } from "react";
import dotenv from 'dotenv'

const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.Content}>
        <h1>YOU ARE ON YOUR DASHBOARD :))</h1>

        <div>
          <img className={styles.wip} src="/home/WIP.png" alt="Work in Process"/>
        </div>
      </div>
    </main>
  );
}