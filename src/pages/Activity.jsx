import { Outlet } from "react-router-dom";
import styles from "../styles/pages/Activity.module.scss";

export default function Activity() {
  return (
    <div className={styles.Activity}>
      <h1>Activity</h1>
      <Outlet />
    </div>
  );
}
