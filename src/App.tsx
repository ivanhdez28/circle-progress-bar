import { Component, useCallback, useEffect, useState } from "react";
import "./styles.css";

const circleConfig = {
  viewBox: "0 0 38 38",
  x: "19",
  y: "19",
  radio: "15",
};

// const percentage = 50;
const CircleProgressBar = ({
  percentage,
}: {
  percentage: number;
  direction?: string;
}): JSX.Element => {
  //   const dir = direction === "clockwise" ? 1 : -1;
  //   const transform = `rotate(-90deg) scale(1, ${dir})`;
  const transform = `rotate(-90deg)`;
  return (
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
          transformOrigin: "center center",
        }}
      />
    </svg>
  );
};

class CountdownCircle extends Component<
  { duration?: number },
  { progressBar: number }
> {
  state = {
    progressBar: 4000,
  };

  componentDidMount = () => {
    // const { duration } = this.props;
    const time = new Date();
    const t = setInterval(() => {
      if (this.state.progressBar > 0) {
        this.setState((prevState) => {
          return {
            progressBar: prevState.progressBar - 4,
          };
        });
      } else {
        clearInterval(t);
        const end = new Date();
        console.log("time diff", end.valueOf() - time.valueOf());
      }
    }, 1);
  };

  render = () => {
    const { progressBar } = this.state;
    return <CircleProgressBar percentage={progressBar / 40} />;
  };
}

const CountdownCircleF = () => {
  const [progressBar, setProgressBar] = useState(4000);

  useEffect(() => {
    const t = setInterval(() => {
      if (progressBar > 0) {
        console.log("set progress bar");
        setProgressBar((prevState) => {
          return prevState - 4;
        });
      } else {
        clearInterval(t);
      }
    }, 1);
  }, []);

  return <CircleProgressBar percentage={progressBar} />;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        style={{
          width: "300px",
          height: "300px",
        }}
      >
        <CountdownCircleF />
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
        }}
      >
        <CountdownCircle />
      </div>
      <CircleProgressBar percentage={10} />
    </div>
  );
}
