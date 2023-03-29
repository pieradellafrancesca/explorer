import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    GET("").then((data) => setItemList(data));
  }, []);

  const filteredList = (list, category) =>
    list.filter((item) => item.category === category);

  return (
    <div className={styles.Activities}>
      <h1>Activities</h1>
      <section>
        <h2>Women's clothing</h2>
        <CardList data={filteredList(itemList, "women's clothing")} />
      </section>
      <section>
        <h2>Electronics</h2>
        <CardList data={filteredList(itemList, "electronics")} />
      </section>
    </div>
  );
}
