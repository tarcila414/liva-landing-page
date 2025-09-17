import { Card } from "@/components/Card/Card";
import styles from "./Projects.module.css";
import { Button } from "@/components/Button/Button";
export const Projects = () => {
  const items = [
    {
      title: "HORIZONTE RESIDENCE",
      image: "/projects-banner/image1.png",
      tag: "PRÉ LANÇAMENTO",
      city: "Barra Velha",
      district: "Tabuleiro",
      features: [
        "Apartamento com 3 dormitórios sendo 1 suíte",
        "Condomínio Fechado",
      ],
    },
    { title: "ONE TOWER", image: "/projects-banner/image2.png" },
    { title: "INFINITY COAST", image: "/projects-banner/image3.png" },
    { title: "SKYLINE TOWER", image: "/projects-banner/image4.png" },
    { title: "GRANDE PLACE TOWER", image: "/projects-banner/image5.png" },
    { title: "IMPERIUM TOWER", image: "/projects-banner/image6.png" },
    { title: "TITANIUM TOWER", image: "/projects-banner/image7.png" },
    { title: "BLUE COST TOWER", image: "/projects-banner/image8.png" },
    { title: "GRAND PLACE TOWER", image: "/projects-banner/image9.png" },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h3>
        Confira todos os <span>empreendimentos da Liva</span>
      </h3>
      <div className={styles.cardsContainer}>
        {items.map((p, index) => (
          <div
            key={p.title}
            className={index === 0 ? styles.highlight : undefined}
          >
            <Card {...p} />
          </div>
        ))}
      </div>
      <div className={styles.loadMore}>
        <Button>CARREGAR MAIS</Button>
      </div>
    </section>
  );
};
