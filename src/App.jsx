// import { EventHandling } from "./components/EventHandling";
// import { EventPropagation } from "./components/EventPropagation";
import { State } from "./components/hooks/state";
import './components/EV.css'
// import { EventProps } from "./components/EventProps";
// import { Netflix } from "./components/Netflix";

function App() {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center", margin: "20px 0", color: "#e50914" }}>
        Netflix Originals
      </h1>
      <Netflix /> */}
      {/* <EventHandling /> */}
      {/* <hr /> */}
      {/* <EventProps /> */}
        {/* <EventPropagation/> */}
        <State/>
    </div>
  );
}

export default App;
