import { MovieList } from "./MovieList";
export const MovieCard = () => {
  const movieData = [
    {
      id: 1,
      movie: "Inception",
      rating: 8.2,
      genre: "sci-fi",
      isRecommnended: true,
      watchLink: "#",
    },
    {
      id: 2,
      movie: "Tenet",
      rating: 7.9,
      genre: "sci-fi",
      isRecommnended: false,
      watchLink: "#",
    },
    {
      id: 3,
      movie: "Money Heist",
      rating: 8.4,
      genre: "Action, Crime, Drama",
      isRecommnended: true,
      watchLink: "#",
    },
  ];

  return (
    <>
      <h1>Movie Gallery App</h1>
      {movieData.map((movieObj) => (
        <MovieList
          key={movieObj.id}
          movie={movieObj.movie}
          rating={movieObj.rating}
          genre={movieObj.genre}
          isRecommnended={movieObj.isRecommnended}
        >
          <a
            href="{movieObj.watchLink}"
            target="blank"
            rel="noopener noreferrer"
          >
            <button>Watch Now</button>
          </a>
        </MovieList>
      ))}
    </>
  );
};
