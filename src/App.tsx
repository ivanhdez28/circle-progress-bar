import { useCallback, useEffect, useState } from "react";
import "./styles.css";

const circleConfig = {
  viewBox: "0 0 38 38",
  x: "19",
  y: "19",
  radio: "15"
};

// const percentage = 50;
const CircleProgressBar = ({ percentage, direction = "clockwise" }) => {
  const dir = direction === "clockwise" ? 1 : -1;
  const transform = `rotate(-90deg) scale(1, ${dir})`;
  return (
    <figure>
      <svg viewBox={circleConfig.viewBox}>
        <circle
          className="ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill={"transparent"}
          stroke="gray"
          strokeDasharray={`${percentage} ${100 - percentage}`}
          style={{
            transform,
            transformOrigin: "center center"
          }}
        />
      </svg>
    </figure>
  );
};

const CountdownCircle = () => {
  const [progressBar, setProgressBar] = useState(100);

  useEffect(() => {
    setInterval(
      (progress) => {
        if (progress > 0) {
          console.log("set progress bar called", progress);
          // setProgressBar(progress - 0.025);
        }
      },
      1,
      progressBar
    );
  }, [progressBar, setProgressBar]);

  return <CircleProgressBar percentage={progressBar} />;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CountdownCircle />
    </div>
  );
}
