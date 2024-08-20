'use client'
import styles from "./chat.module.sass";
import Navbar from "../components/navbar/page.js";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { isLoggedIn } from "../actions/account.js";
import dotenv from 'dotenv';

dotenv.config();
const server_url = process.env.NEXT_PUBLIC_SERVER_URL_CHAT;

export default function Chat() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)

  //Checks if the user is logged in
  useEffect(() => {
    const loginCheck = async () => {
      const isLogged = await isLoggedIn()
      setLoggedIn(isLogged)
    }; loginCheck()
  }, [])

  // Socket connection :)
  useEffect(() => {
    const newSocket = io(server_url, {
      withCredentials: true,
    });

    setSocket(newSocket);

    newSocket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.close();
    };

  }, [server_url]);

  // Chat messages
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.input;

    if (input.value && socket) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.Content}>
        <ul id="messages">
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form id="form" onSubmit={handleSubmit}>
          <input id="input" autoComplete="off" disabled={!loggedIn}/><button type="submit" disabled={!loggedIn}>Send</button>
        </form>
      </div>
    </main>
  );
}
