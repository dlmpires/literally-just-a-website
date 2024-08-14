'use client'
import styles from "./chat.module.sass";
import Navbar from "../components/navbar/page.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dotenv from 'dotenv'

dotenv.config()
const server_url = process.env.NEXT_PUBLIC_SERVER_URL

export default function Chat() {

  
  return (
    <main className={styles.main}>
        <script src="https://cdn.socket.io/socket.io-3.0.0.js"></script>
        <Navbar />
        <div className={styles.Content}>


        
        </div>
    </main>
  );
}