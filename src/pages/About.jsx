import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/About.module.scss";
import { GET } from "../utils/http";

export default function About() {
  const [regions, setRegions] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    GET("activities").then((data) => setRegions(() => data.results));
  }, []);

  const onHandleClick = () => {
    navigate(`/activities?region=${inputValue}`);
  };

  const onHandleInput = (event) => {
    setInputValue(() => event.target.value);
  };

  // const getRegions = () =>
  //   regions.map((region) => region.address.addressRegion);

  // const onlyUnique = getRegions().filter(
  //   (value, i, arr) => arr.indexOf(value) === i
  // );

  return (
    <div className={styles.About}>
      <h1>About</h1>
      {/* {console.log(getRegions(), onlyUnique)} */}
      <select value={inputValue} onChange={onHandleInput}>
        <option value="all">Select region</option>
        {/* {onlyUnique.map((region, i) => (
          <option value={region} key={i}>
            {region}
          </option>
        ))} */}
        <option value="Carlow">Carlow</option>
        <option value="Cork">Cork</option>
        <option value="Donegal">Donegal</option>
        <option value="Limerick">Limerick</option>
        <option value="Tipperary">Tipperary</option>
      </select>
      <button onClick={onHandleClick}>Submit</button>
    </div>
  );
}
