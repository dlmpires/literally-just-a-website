"use client";
import { BedDouble, Ruler, Users } from "lucide-react";
import React from "react";
import styles from "./room_card.module.sass";

export default function RoomCard(props) {
  const [menu, setMenu] = React.useState(false); // false - closed / true - open

  return (
    <div className={styles.card}>
      <img draggable="false" src={props.room_img} alt="" />
      <div className={styles.card_info}>
        <h1 className={styles.title}>{props.room_title}</h1>
        <div className={styles.info}>
          <BedDouble />
          <h2>{props.room_bed}</h2>
        </div>
        <div className={styles.info}>
          <Ruler />
          <h2>{props.room_size}</h2>
        </div>
        <div className={styles.info}>
          <Users />
          <h2>{props.room_capacity}</h2>
        </div>
      </div>
    </div>
  );
}
