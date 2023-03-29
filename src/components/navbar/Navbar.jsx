import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import appLogo from "../../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img className={styles.logo} src={appLogo} alt="logo image" />
      <RxHamburgerMenu className={styles.mobileToggle} />
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/activities">
            Activities
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/city/:id">
            City
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
