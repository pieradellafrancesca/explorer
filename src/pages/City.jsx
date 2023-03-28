import { Outlet } from "react-router-dom";
import styles from "../styles/pages/City.module.scss";

export default function City() {
  return (
    <div className={styles.City}>
      <h1>City</h1>
      <Outlet />
    </div>
  );
}
