import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.id}`);
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img className={styles.image} src={data.image} alt={data.title} />
      <div className={styles.text}>
        <h3>{data.title}</h3>
        <p>Price: ${data.price}</p>
      </div>
    </div>
  );
};

export default Card;
