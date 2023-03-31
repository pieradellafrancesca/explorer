import Card from "../card/Card";
import styles from "./index.module.scss";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data.map((item, index) => (
        <Card data={item} i={Math.floor(Math.random() * 100)} key={index} />
      ))}
    </div>
  );
};

export default CardList;
