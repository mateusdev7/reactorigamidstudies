import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/" end className={styles.botao}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="contato" className={styles.botao}>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
