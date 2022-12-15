import styles from "../styles/Contato.module.css";
import foto from "../img/contato.jpg";
const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>mateuspaulo1337@gmail.com</li>
          <li>+5527995249319</li>
          <li>Escadaria Santino Bruschi</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
