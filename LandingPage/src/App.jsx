import "./App.css";

import Navbar from "./components/navbar";
import Client from "./components/Client";
import StandOut from "./components/StandOut";
import TransformBrand from "./components/TransformBrand";

function App() {
  return (
    <>
      <Navbar />
      <TransformBrand />
      <StandOut />
      <Client />
    </>
  );
}

export default App;
