import Counter from "./Counter";
import StopWatch from "./StopWatch";
import Clock from "./Clock";
import Navbar from "./Navbar";
import { useState } from "react";
import Home from "./Home";

function App() {
  const colors = [
    "bg-gray-900",
    "bg-violet-900",
    "bg-purple-900",
    "bg-red-900",
    "bg-pink-900",
    "bg-indigo-900",
  ];
  const [colorIn, setcolorIn] = useState(0);
  const changeColor = () => {
    if (colorIn != 5) {
      setcolorIn((colorIn) => colorIn + 1);
    }
    if (colorIn == 5) {
      setcolorIn((colorIn) => 0);
    }
  };
  return (
    <div
      className={`${colors[colorIn]}
     overflow-x-hidden`}
    >
      <Navbar currentColor={colors[colorIn]} onColorChange={changeColor} />
      <div id="clock" className="flex items-center justify-center h-screen">
        <Clock />
      </div>

      <div id="counter" className="flex items-center justify-center h-screen">
        <Counter />
      </div>
      <div id="stopwatch" className="flex items-center justify-center h-screen">
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
