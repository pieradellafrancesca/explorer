import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function City() {
  const { id } = useParams();

  const [accommodation, setAccommodation] = useState({});

  useEffect(() => {
    GET(`accommodation?$filter=name%20eq%20%27${id}%27`).then((data) => {
      setAccommodation(() => data.results[0]);
    });
  }, []);

  return (
    <div className={styles.City}>
      {console.log(accommodation)}
      <h1>{id}</h1>
      <p>{accommodation.telephone}</p>
      <p>{accommodation.name}</p>
    </div>
  );
}
