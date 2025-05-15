import netflixData from "../api/netflixData.json";
import { NetflixCard } from "./NetflixCard";

export const Netflix = () => {
  return (
    <ul>
      {netflixData.map((curElem) =>(
         <NetflixCard key={curElem.id} curElem={curElem} />
        ))}
    </ul>
  );
};
