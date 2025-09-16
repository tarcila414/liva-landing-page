import styles from "./Socials.module.css";
import Image from "next/image";

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <span className={styles.title}>Acompanhe nas redes</span>
      <div className={styles.icons}>
        <a href="#">
          <Image
            src="/icons/facebook.svg"
            width={28}
            height={28}
            alt="Facebook"
          />
        </a>
        <a href="#">
          <Image
            src="/icons/instagram.svg"
            width={28}
            height={28}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};
