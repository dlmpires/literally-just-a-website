"use client";
import React from "react";
import RoomCard from "../room_card/room_card";
import styles from "./rooms_carroussel.module.sass";
export default function RoomsCarroussel() {
  return (
    <div className={styles.rooms}>
      <RoomCard
        room_img="/menu-background.png"
        room_title="Room Title"
        room_bed="1 king-size"
        room_size="49m^2"
        room_capacity="2 adults"
      />
      <RoomCard
        room_img="/menu-background.png"
        room_title="Room Title"
        room_bed="1 king-size"
        room_size="49m^2"
        room_capacity="2 adults"
      />
      <RoomCard
        room_img="/menu-background.png"
        room_title="Room Title"
        room_bed="1 king-size"
        room_size="49m^2"
        room_capacity="2 adults"
      />
      <RoomCard
        room_img="/menu-background.png"
        room_title="Room Title"
        room_bed="1 king-size"
        room_size="49m^2"
        room_capacity="2 adults"
      />
      <RoomCard
        room_img="/menu-background.png"
        room_title="Room Title"
        room_bed="1 king-size"
        room_size="49m^2"
        room_capacity="2 adults"
      />
    </div>
  );
}
