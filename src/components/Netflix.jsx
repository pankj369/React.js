import netflixData from "../api/netflixData.json";
import { NetflixCard } from "./NetflixCard";
import styled from "styled-components";

export const Netflix = () => {
const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style-type: none;
  background-color: #111;
  min-height: 100vh;
`;
  return (
    <ListWrapper>
      {netflixData.map((curElem) => (
        <NetflixCard key={curElem.id} curElem={curElem} />
      ))}
    </ListWrapper>
  );
};
