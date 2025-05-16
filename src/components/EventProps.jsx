import "./EV.css";
export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user} `);
  };
  const handleHover = () => {
    alert(`Hey thank you for Hovering me!`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("pankaj")}
        onMouseEnter={handleHover}
      />
    </>
  );
};
const WelcomeUser = (props) => {
  const {onClick, onMouseEnter}= props;
  const handleGreeting = () => {
   console.log(`Hey user, welcome!`);
    onClick();
  };
  return (
    <>
      <button  onClick={onClick}>
        Click
      </button>
      <button  onMouseEnter={onMouseEnter}>
        Hover me
      </button>
      <button  onClick={handleGreeting}>
        Greeting
      </button>
    </>
  );
};
