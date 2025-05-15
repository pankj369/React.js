import { Fragment } from "react";
import Netflix,{Footer} from "./components/Netflix";


const App = () => {
  // return [<Netflix keys="1" />, <Netflix keys="1" />];//harostic
  // so we use React.Framents,fragments, <> </>
  return (
    <Fragment>
      <Netflix />
      <Netflix />
      <Netflix />
      <Netflix />
      <Footer/>
    </Fragment> //we can also use <> our components like netflix</>
  );
};
export default App;