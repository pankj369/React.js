export const NetflixCard = ({ curElem }) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    curElem;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
        <h1>Name: {name}</h1>
        <strong>Rating:{rating}</strong>
        <p>Description: {description} </p>
        <p>Caste: {cast}</p>
        <p>Genre: {genre} </p>
        <a href={watch_url} target="_blank" rel='noopener noreferrer'>
          <button>Watch Now </button>
        </a>
      </div>
    </li>
  );
};
