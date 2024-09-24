import styles from "./NavSlime.module.css";

const NavSlime = () => {
  return (
    <div className={styles.contenedor}>
      <section className={styles.slimeNavbar}>
        <ul>
          <a href="#home">
            <li>Inicio</li>
          </a>{" "}
          <a href="#projects">
            <li>Proyectos</li>
          </a>
          <a href="#technologies">
            <li>Tecnologías</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
      </section>
    </div>
  );
};

export default NavSlime;
