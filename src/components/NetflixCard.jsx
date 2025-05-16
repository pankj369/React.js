import styles from "./NetflixCard.module.css";
export const NetflixCard = ({ curElem }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } =
    curElem;
  const buttonStyle={
        backgroundColor:rating>=8.5 ? "#04682f" : "#b99502",
  };
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <img src={img_url} alt={name} className={styles.img} />
      <h1>Name: {name}</h1>
      <strong>
        Rating:
        <span className={ratingClass}>{rating}</span>
      </strong>
      <p>Description: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button  className={styles.button} style={buttonStyle}>Watch Now</button>
      </a>
    </li>
  );
};
