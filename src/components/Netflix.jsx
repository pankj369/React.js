import netflixData from "../api/netflixData.json";
import { NetflixCard } from "./NetflixCard";

export const Netflix = () => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem',
  };

  return (
    <ul style={listStyle}>
      {netflixData.map((curElem) => (
        <NetflixCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};
