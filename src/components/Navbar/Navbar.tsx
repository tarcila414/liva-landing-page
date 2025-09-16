"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Image from "next/image";
import { Socials } from "./components/Socials/Socials";
import { WhatsAppBtn } from "./components/WhatsappBtn/WhatsappBtn";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="Liva"
          className={styles.logo}
          width={108}
          height={43}
          priority
        />
        <nav className={styles.desktopMenu}>
          <a href="#home">Home</a>
          <a href="#about">Sobre a Liva</a>
          <a href="#">Empreendimentos</a>
          <a href="#">Notícias</a>
          <a href="#">Contato</a>
        </nav>
        <div className={styles.socialsContainer}>
          <Socials />
          <WhatsAppBtn size="small" />
        </div>

        <button
          className={styles.mobileBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src={
              menuOpen ? "/icons/close-outlined.png" : "/icons/menu-bars.png"
            }
            width={16}
            height={16}
            alt="Menu"
          />
        </button>
      </div>
      {menuOpen && <MobileMenu />}
    </header>
  );
}
