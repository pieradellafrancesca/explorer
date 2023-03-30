import { useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import styles from "./index.module.scss";

const Card = ({ data, i }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/attractions/${data.name}%27`);
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img
        className={styles.image}
        src={`https://streetviewhub.com/shots/200?${i}`}
        alt={data.name}
      />
      <div className={styles.text}>
        <h3>{data.name}</h3>
        <p>
          <FiMapPin /> <span>{data.address.addressLocality}</span>,{" "}
          <span>{data.address.addressRegion}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
