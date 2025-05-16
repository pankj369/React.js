import netflixData from "../api/netflixData.json";
import { NetflixCard } from "./NetflixCard";
import styles from './NetflixCard.module.css';
export const Netflix = () => {

  return (
    <ul className={styles.listStyle}>
      {netflixData.map((curElem) => (
        <NetflixCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};
