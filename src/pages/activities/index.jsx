import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("attractions").then((data) => setActivities(() => data.results));
  }, []);

  const filteredList = (list, type) =>
    list.filter((item) => item["@type"].includes(type));

  return (
    <div className={styles.Activities}>
      <h1>Activities</h1>
      <section>
        <h2>Museums</h2>
        <CardList data={filteredList(activities, "Museum")} />
      </section>
      <section>
        <h2>Sports Activity</h2>
        <CardList data={filteredList(activities, "SportsActivityLocation")} />
      </section>
    </div>
  );
}
