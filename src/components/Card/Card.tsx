import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  tag?: string;
  city?: string;
  district?: string;
  features?: string[];
}

export const Card = ({
  image,
  tag,
  title,
  city,
  district,
  features,
}: CardProps) => {
  return (
    <article className={styles.card}>
      <figure className={styles.figure}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={10}
          height={10}
        />

        <figcaption className={styles.basicInfo}>
          {!!tag && <span className={styles.tag}>{tag}</span>}
          <h3 className={styles.title}>{title}</h3>
        </figcaption>

        {!!city && !!district && (
          <div className={styles.extraInfo}>
            <div className={styles.location}>
              <div className={styles.locationItem}>
                <p>Cidade</p>
                <p>
                  <strong>{city}</strong>
                </p>
              </div>
              <div className={styles.locationItem}>
                <p>Bairro</p>
                <p>
                  <strong>{district}</strong>
                </p>
              </div>
            </div>
            <ul className={styles.features}>
              {features?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </figure>
    </article>
  );
};
