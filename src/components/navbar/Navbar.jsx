import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import appLogo from "../../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  const onHandleClick = () => {
    setNavbarVisibility((prev) => !prev);
  };

  const onHandleInput = (event) => {
    setInputValue(() => event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    navigate(`/city/${inputValue}`);
    setInputValue(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <img className={styles.logo} src={appLogo} alt="logo image" />
      <RxHamburgerMenu
        onClick={onHandleClick}
        className={styles.mobileToggle}
      />
      <ul className={`${styles.list} ${navbarVisibility && styles.visible}`}>
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
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={onHandleInput}
          type="text"
          value={inputValue}
          placeholder="Search..."
          minLength={3}
          required
        />
      </form>
    </div>
  );
};

export default Navbar;
