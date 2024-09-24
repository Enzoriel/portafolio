import styles from "./NavSlime.module.css";

const NavSlime = () => {
  return (
    <div className={styles.contenedor}>
      <section className={styles.slimeNavbar}>
        <ul>
          <li>
            <img src="NavbarSlime.svg" alt="Descripción del SVG" />
            <a href="#home">Inicio</a>
          </li>
          <li>
            <img src="NavbarSlime.svg" alt="Descripción del SVG" />
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <img src="NavbarSlime.svg" alt="Descripción del SVG" />
            <a href="#technologies">Tecnologías</a>
          </li>
          <li>
            <img src="NavbarSlime.svg" alt="Descripción del SVG" />
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <img src="NavbarSlime.svg" alt="Descripción del SVG" />
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavSlime;
