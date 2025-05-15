export const MovieList = (props) => {
  const {
    movie,
    rating,
    genre,
    isRecommnended,
    children
  } = props;
  return (
    <>
      <h1>Movie Name: {movie}</h1>
      <h3>Rating: {rating}</h3>
      <p>Genre: {genre}</p>
      {/* conditional rendering */}
      {isRecommnended ? <p>Rcommended</p> : null}
      {/* JSX as props */}
      {children}
    </>
  );
};