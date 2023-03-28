import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Footer />
    </div>
  );
}
