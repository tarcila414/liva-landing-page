import Image from "next/image";
import styles from "./Arrows.module.css";
interface ArrowsProps {
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

export const Arrows = ({
  leftDisabled,
  rightDisabled,
  onLeftClick,
  onRightClick,
}: ArrowsProps) => {
  return (
    <div className={styles.arrows}>
      <button
        className={styles.arrowBtn}
        type="button"
        onClick={onLeftClick}
        title="Seta para esquerda"
        disabled={!!leftDisabled}
      >
        <Image
          src="/icons/arrow-outlined-left.png"
          alt="Seta para esquerda"
          width={24}
          height={24}
        />
      </button>
      <button
        className={styles.arrowBtn}
        type="button"
        title="Seta para direita"
        onClick={onRightClick}
        disabled={!!rightDisabled}
      >
        <Image
          src="/icons/arrow-outlined-right.png"
          alt="Seta para direita"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
