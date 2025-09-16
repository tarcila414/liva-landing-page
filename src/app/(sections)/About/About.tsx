import { Button } from "@/components/Button/Button";
import Image from "next/image";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Image
        className={styles.logo}
        src="/logo-filled.png"
        width={250}
        height={250}
        alt="logo-preenchida"
      />
      <div className={styles.textContainer}>
        <h2>
          Construímos confiança e <span>realizamos sonhos!</span>
        </h2>
        <p>
          Na Liva, cada projeto é planejado para facilitar a vida dos moradores,
          trazendo uma sensação máxima de bem-estar.
        </p>
        <Button>SAIBA MAIS</Button>
      </div>
    </section>
  );
};
