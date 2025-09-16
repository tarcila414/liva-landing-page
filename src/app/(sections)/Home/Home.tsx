"use client";

import { InfoContent } from "./components/InfoContent/InfoContent";
import { Arrows } from "./components/Arrows/Arrows";
import styles from "./Home.module.css";
import { useState } from "react";
export const Home = () => {
  const [currentImgId, setCurrentImgId] = useState(1);

  const handleLeftClick = () => {
    setCurrentImgId((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const handleRightClick = () => {
    setCurrentImgId((prev) => (prev === 3 ? 3 : prev + 1));
  };
  return (
    <section
      className={styles.home}
      id="home"
      style={{
        backgroundImage: `url("/projects-view/image${currentImgId}.png")`,
      }}
    >
      <InfoContent />
      <Arrows
        leftDisabled={currentImgId === 1}
        rightDisabled={currentImgId === 3}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
    </section>
  );
};
