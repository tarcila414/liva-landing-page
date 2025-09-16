import { Button } from "@/components/Button/Button";
import styles from "./InfoContent.module.css";

export const InfoContent = () => {
  return (
    <div className={styles.infoContent}>
      <span>Pré Lançamento</span>
      <h1>Barra View</h1>
      <p>Apartamento com 3 dormitórios sendo 1 suíte</p>
      <Button variant="secondary">SAIBA MAIS</Button>
    </div>
  );
};
