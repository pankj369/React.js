
export const Netflix = () => {
  const name = "Library Website by pankaj";
  const sponsered = "Mithilanchal Makhaana";
  const rate = "8.2";
  const details =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, minus. Nobis quasi ipsam consequatur tenetur voluptatibus at remadipisci molestiae assumenda! Sequi molestias eligendi inventore nihil eos accusamus iste sed?";

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  let age = 18;
  // const watchNow = () => {
  //   if (age >= 18) {
  //     return "Watch Now";
  //   } else return "Unavailable";
  // };

  // let canWatch = "Not Available";
  // if (age >= 18) canWatch = "Watch Now";

  return (
    <div>
      <div>
        <img src="heroimg.png" alt="heroimg.png" />
        <h1>Name: {name}</h1>
        <h4>Sponsered: {sponsered}</h4>
        <p>
          <strong>Rating:{rate}</strong>
        </p>
        <p>Genre: {returnGenre()} </p>
        <p>Description={details} </p>
        <button>{age >= 18 ? "Watch now" : "Unavailable"}</button>
        {/* <button>{watchNow()}</button> */}
        {/* <button>{canWatch}</button> */}
      </div>
    </div>
  );
};
export default Netflix; //ek he bna skte hai default file 


export const Footer=()=>{// extend kr ke multiple bna skte hai 
  return (
    <>
  <h3>Contact Us</h3>
  <p>&Copy copyright All right reserved</p>
</>  
)
}
