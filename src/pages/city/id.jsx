import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function City() {
  const { id } = useParams();

  const [accomodation, setAccomodation] = useState({});

  useEffect(() => {
    GET(`accomodation$filter=name%20eq%20%27'${id}'%27`).then((data) => {
      setAccomodation(data.results[0]);
    });
  }, []);

  return (
    <div className={styles.City}>
      <h1>{id}</h1>
      <p>{accomodation.telephone}</p>
      <p>{accomodation.name}</p>
    </div>
  );
}
