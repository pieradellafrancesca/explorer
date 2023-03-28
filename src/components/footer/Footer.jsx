import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>company</h4>
            <ul>
              <li>about</li>
              <li>stampa</li>
              <li>sostenibilità</li>
              <li>lavora con noi</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>scopri di più</h4>
            <ul>
              <li>cosa dicono di noi</li>
              <li>tour personalizzati</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>partnership</h4>
            <ul>
              <li>programmi di affiliazione</li>
              <li>personal travel agent</li>
              <li>agenzie viaggi</li>
              <li>diventa nostro fornitore</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>follow us</h4>
            <div className={styles.socials}>
              <ImFacebook className={styles.icon} />
              <ImTwitter className={styles.icon} />
              <BsInstagram className={styles.icon} />
              <ImLinkedin2 className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
