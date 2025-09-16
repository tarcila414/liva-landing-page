import { Socials } from "../Socials/Socials";
import { WhatsAppBtn } from "../WhatsappBtn/WhatsappBtn";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a href="#">HOME</a>
          <a href="#">SOBRE A LIVA</a>
          <a href="#">EMPREENDIMENTOS</a>
          <a href="#">NOTÍCIAS</a>
          <a href="#">CONTATO</a>
        </div>
        <Socials />
      </div>
      <div className={styles.footer}>
        <WhatsAppBtn />
      </div>
    </div>
  );
}
