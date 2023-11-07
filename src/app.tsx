import classes from "./app.module.css";
import { ProgressBar } from "./components/progress-bar/progress-bar";
import arrowRight from "./assets/arrow-right.svg";
import { useState } from "react";
const App = () => {
  const [currentProgressPercentage, setCurrentProgressPercentage] =
    useState(100);

  return (
    <div className={classes.container}>
      <button onClick={() => setCurrentProgressPercentage(Math.random() * 100)}>
        Randomize
      </button>
      <div className={classes.header}>
        <h1>Holiday Bonus</h1>
        <img src={arrowRight} />
      </div>
      <ProgressBar
        percentage={currentProgressPercentage * Math.random()}
        milestones={["1k", "5k", "10k", "30k", "50k", "100k", "1M", "3M", "5M"]}
      />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
      <ProgressBar percentage={currentProgressPercentage * Math.random()} />
    </div>
  );
};

export default App;
