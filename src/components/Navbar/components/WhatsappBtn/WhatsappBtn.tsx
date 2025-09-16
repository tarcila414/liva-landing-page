import styles from "./WhatsappBtn.module.css";
import Image from "next/image";

interface WhatsAppBtnProps {
  size?: "small" | "large";
}
export const WhatsAppBtn = ({ size }: WhatsAppBtnProps) => {
  return (
    <button
      type="button"
      id={size === "small" ? styles.small : undefined}
      className={styles.button}
    >
      <Image src="/icons/whatsapp.png" width={14} height={14} alt="Whatsapp" />
      <span>WHATSAPP</span>
    </button>
  );
};
