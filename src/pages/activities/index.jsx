import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [searchParams] = useSearchParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("attractions").then((data) => setActivities(() => data.results));
  }, []);

  const filteredList = (list, type) =>
    list.filter((item) => item["@type"].includes(type));

  const filteredByRegion = (list) =>
    list.filter(
      (item) => item.address.addressRegion === searchParams.get("region")
    );

  return (
    <div className={styles.Activities}>
      {searchParams.get("region") && (
        <section>
          <h2>{`Activities in ${searchParams.get("region").toUpperCase()}`}</h2>
          <CardList data={filteredByRegion(activities)} />
        </section>
      )}
      <h1>ACTIVITIES</h1>
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
