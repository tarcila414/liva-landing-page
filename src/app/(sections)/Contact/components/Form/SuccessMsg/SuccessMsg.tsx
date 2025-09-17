import Image from "next/image";
import styles from "./SuccessMsg.module.css";

export const SuccessMsg = () => {
  return (
    <div className={styles.successMsg}>
      <Image src="/icons/check.png" width={32} height={32} alt="Check" />
      <h1>Mensagem enviada com sucesso!</h1>
      <p>Em instantes entraremos em contato</p>
    </div>
  );
};
