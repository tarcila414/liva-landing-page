import Image from "next/image";
import styles from "./Consultants.module.css";
export const Consultants = () => {
  return (
    <div className={styles.consultants}>
      <h1>Consultores online</h1>
      <div className={styles.imagesContainer}>
        <Image
          width={48}
          height={48}
          src="/avatars/image1.png"
          alt="Consultor 1"
        />
        <Image
          width={48}
          height={48}
          src="/avatars/image2.png"
          alt="Consultor 2"
        />
        <Image
          width={48}
          height={48}
          src="/avatars/image3.png"
          alt="Consultor 3"
        />
      </div>
    </div>
  );
};
