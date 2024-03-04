"use client";
import React from "react";
import RoomCard from "../room_card/room_card";
import styles from "./rooms_carroussel.module.sass";
export default function RoomsCarroussel() {
  const [list, setList] = React.useState([" a ", " b ", " c "]);
  const [index, setIndex] = React.useState(0);
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? list.length : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex > list.length ? 0 : newIndex);
  };
  return (
    <div className={styles.rooms_carroussel}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quartos de Hóspede</h1>
        <a className={styles.see_all}>VER TODOS</a>
      </div>

      <div className={styles.carroussel}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <p>
          <a>{index - 1 < 0 ? list[list.length - 1] : list[index - 1]} |</a>
          <a>{list[index]} |</a>
          <a>{index + 1 >= list.length ? list[0] : list[index]}</a>
        </p>
        <p>
          <a>{index - 1 < 0 ? list.length - 1 : index - 1} |</a>
          <a>{index} |</a>
          <a>{index + 1 >= list.length ? 0 : index}</a>
        </p>
      </div>
    </div>
  );
}
