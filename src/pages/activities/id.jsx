import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import { FiMapPin } from "react-icons/fi";
import styles from "./id.module.scss";

export default function Activity() {
  // const params = useParams();
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(`attractions?$filter=name%20eq%20%27${id}`).then((data) =>
      setActivity(() => data.results[0])
    );
  }, []);

  return (
    <div className={styles.Activity}>
      {console.log(activity)}
      {activity.name ? (
        <>
          <iframe
            width="600"
            height="450"
            src={`https://maps.google.com/maps/?q=+${activity.geo.latitude}+,+${activity.geo.longitude}&output=embed`}
          ></iframe>
          <div className={styles.text}>
            <h1>{activity.name}</h1>
            <p>
              <FiMapPin /> <span>{activity.address.addressLocality}</span>,{" "}
              <span>{activity.address.addressRegion}</span>
            </p>
            <p>
              <a href={activity.url}>{activity.url}</a>
            </p>
            <p>{activity.telephone}</p>
          </div>
        </>
      ) : (
        <h3>Product not found</h3>
      )}
    </div>
  );
}
