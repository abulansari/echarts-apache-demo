import "./App.css"
import Bar from "./component/bar";
import CandleStick from "./component/CandleStick";
import Line from './component/line';
import MultipleBar from "./component/multipleBar";
import Scatter from "./component/Scatter";

function App() {
  return (
    <>
      <Line />
      <Bar />
      <MultipleBar />
      <Scatter />
      <CandleStick />

      <footer></footer>
    </>
  )
}
export default App;
