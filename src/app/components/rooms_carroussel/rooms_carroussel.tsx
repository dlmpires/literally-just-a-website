"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import RoomCard from "../room_card/room_card";
import styles from "./rooms_carroussel.module.sass";

export default function RoomsCarroussel(props: { title: string }) {
  return (
    <div className={styles.rooms_carroussel}>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.title}</h1>
        <a className={styles.see_all}>VER TODOS</a>
      </div>
      <div className={styles.carroussel}>
        <Splide             
          options={{
            type: "loop",
            focus: "center",
            width: "95vw",
            perPage: 3,
            
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <RoomCard
              room_img="/menu-background.png"
              room_title="Quarto Premier"
              room_bed="1 king-size"
              room_size="49m^2"
              room_capacity="2 adults"
            />
          </SplideSlide>
          <SplideSlide>
            <RoomCard
              room_img="/menu-background.png"
              room_title="Quarto Deluxe"
              room_bed="1 king-size"
              room_size="49m^2"
              room_capacity="2 adults"
            />
          </SplideSlide>
          <SplideSlide>
            <RoomCard
              room_img="/menu-background.png"
              room_title="Quarto Superior"
              room_bed="1 king-size"
              room_size="49m^2"
              room_capacity="2 adults"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
