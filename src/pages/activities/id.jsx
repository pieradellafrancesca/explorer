import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function Activity() {
  // const params = useParams();
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(id || 1).then((data) => setActivity(data));
  }, []);

  return (
    <div className={styles.Activity}>
      {activity.id ? (
        <>
          <img
            className={styles.image}
            src={activity.image}
            alt={activity.title}
          />
          <div className={styles.text}>
            <p>
              <em>{activity.category}</em>
            </p>
            <h1>{activity.title}</h1>
            <p>{activity.description}</p>
            <p>Price: $ {activity.price}</p>
          </div>
        </>
      ) : (
        <h3>Product not found</h3>
      )}
    </div>
  );
}
