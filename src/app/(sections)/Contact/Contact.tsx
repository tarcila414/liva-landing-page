import Image from "next/image";
import { Form } from "./components/Form/Form";
import styles from "./Contact.module.css";
import { Consultants } from "./components/Consultants/Consultants";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Fale agora com um consultor de vendas</h2>
          <p>
            Tire suas dúvidas e conheça de perto o seu{" "}
            <span>novo jeito de morar.</span>
          </p>
        </div>
        <Consultants />
        <Form />
      </div>
      <Image
        className={styles.imgBackground}
        src="/office.png"
        alt="background"
        width={600}
        height={600}
      />
    </section>
  );
};
