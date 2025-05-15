import "./NetflixCard.css";
export const NetflixCard = ({ curElem }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } =
    curElem;

  const cardStyle = {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: "20px",
    borderRadius: "15px",
    width: "300px",
    margin: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: `${rating >= 8.5 ? "#04682f" : "#b99502"}`,
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ratingClass=rating>=8.5 ? "super_hit" : "average";
  return (
    <li style={cardStyle}>
      <img src={img_url} alt={name} style={imgStyle} />
      <h1>Name: {name}</h1>
      <strong>
        Rating:
        <span className={`rating ${ratingClass}`}>
          {rating}
        </span>
      </strong>
      <p>Description: {description}</p>
      <p>Cast: {cast}</p>
      <p>Genre: {genre}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button style={buttonStyle}>Watch Now</button>
      </a>
    </li>
  );
};
