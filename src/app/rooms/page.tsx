'use client'
import React from "react"
import styles from "./rooms.module.sass"

import Nav from "../components/nav/nav"
import NavMenu from "../components/nav_menu/nav_menu"
import RoomCard from "../components/room_card/room_card"

export default function Rooms() {
  const [show, setShow] = React.useState(false)

  const toggleNavMenu = () => {
    setShow(!show)
  }

  return (
    <main className={styles.main}>
      {show ? <NavMenu onNavMenuToggle={toggleNavMenu}/> : null}
      <div className={styles.hero}>
        <Nav onNavMenuToggle={toggleNavMenu}/>
        <div className={styles.title}>
          <h1>Alojamenteos</h1>
          <hr />
          <span>
            <h2>Grand</h2>
            <h2>Tranquil</h2>
            <h2>Hotel</h2>
          </span>
        </div>
      </div>
      <RoomCard room_img="/menu-background.png" room_title="Room Title" room_bed="1 king-size" room_size="49m^2" room_capacity="2 adults"/>
    </main>
  );
}
