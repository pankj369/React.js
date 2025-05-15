export function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Pankaj"
        age={30}
        greeting={
          <div>
            <strong>Hi Pankaj, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Watching-movies/webseries</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name="Pritam"
        age={35}
        greeting={
          <div>
            <strong>Hi Pritam, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Cricket, Badminton</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

function ProfileCard(props) {
  const { name, age, greeting, children } = props;
  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
