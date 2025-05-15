export const NetflixCard = (props) => {
  return (
    <li>
      <div>
        <img
          src={props.curElem.img_url}
          alt="qot.png"
          width="40%"
          height="40%"
        />
        <h1>Name: {props.curElem.name}</h1>
        <strong>Rating:{props.curElem.rating}</strong>
        <p>Description={props.curElem.description} </p>
        <p>Caste: {props.curElem.cast}</p>
        <p>Genre: {props.curElem.genre} </p>
        <a href={props.curElem.watch_url} target="_blank">
          <button>Watch Now </button>
        </a>
      </div>
    </li>
  );
};
