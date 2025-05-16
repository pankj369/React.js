import styled from "styled-components";
export const NetflixCard = ({ curElem }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } =
    curElem;


const Card = styled.li`
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 300px;
  margin: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;
  const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
  `;
  const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: ${rating >= 8.5 ? "#04682f" : "#b99502"};
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  `;
  const Rating = styled.span`
    border-radius: 5px;
    padding: 1px 6px;
    background-color: ${rating >= 8.5 ? "#04682f" : "#b99502"};
  `;

  return (
    <Card>
      <Img src={img_url} alt={name} />
      <h1>Name: {name}</h1>
      <strong>
        Rating:
        <Rating>{rating}</Rating>
      </strong>
      <p>Description: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <Button>Watch Now</Button>
      </a>
    </Card>
  );
};
