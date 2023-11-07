import { useEffect, useState } from "react";
import classes from "./progress-bar.module.css";

export type ProgressBarProps = {
  position?: "horizontal" | "vertical";
  milestones?: string[];
  percentage?: number;
};

export const ProgressBar = ({
  // TODO: Implement vertical/horizontal prop
  position = "horizontal",
  percentage,
  milestones = ["1k", "5k", "10k", "30k", "50k", "100k", "1M"],
}: ProgressBarProps) => {
  const [progressPercentage, setProgressPercentage] = useState(percentage);
  const milestonePercentageDiff = 100 / milestones.length;

  useEffect(() => {
    setProgressPercentage(percentage);
  }, [percentage]);

  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div className={classes.milestoneCircles}>
          {milestones?.map((_, index) => {
            return (
              <MilestoneCircleSVG
                key={index}
                complete={
                  progressPercentage
                    ? progressPercentage > milestonePercentageDiff * (index + 1)
                    : false
                }
              />
            );
          })}
        </div>
        <div
          className={classes.progress}
          style={
            {
              "--percentage": `${progressPercentage}%`,
            } as React.CSSProperties
          }
        >
          <div className={classes.innerBar}>
            <ProgressCircleSVG />
          </div>
        </div>
      </div>

      <div className={classes.milestoneValues}>
        {milestones?.map((milestone, index) => {
          return (
            <div key={index} className={classes.milestoneValue}>
              <span>{milestone}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MilestoneCircleSVG = ({
  complete,
  ...rest
}: {
  complete: boolean;
}) => {
  return (
    <svg
      // TODO: toggle to milestone complete on a complete milestone
      className={`${classes.milestoneCircle} ${
        complete
          ? classes.milestoneCircleComplete
          : classes.milestoneCircleIncomplete
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...rest}
    >
      <circle cx="5" cy="5" r="4.5" />
    </svg>
  );
};

export const ProgressCircleSVG = () => {
  return (
    <svg
      className={classes.progressCircle}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle
        cx="11"
        cy="11"
        r="10.3"
        fill="white"
        stroke="#EAAA08"
        strokeWidth="1.4"
      />
      <path
        d="M11 4C11.9193 4 12.8295 4.18106 13.6788 4.53284C14.5281 4.88463 15.2997 5.40024 15.9497 6.05025C16.5998 6.70026 17.1154 7.47194 17.4672 8.32122C17.8189 9.1705 18 10.0807 18 11C18 11.9193 17.8189 12.8295 17.4672 13.6788C17.1154 14.5281 16.5998 15.2997 15.9497 15.9497C15.2997 16.5998 14.5281 17.1154 13.6788 17.4672C12.8295 17.8189 11.9193 18 11 18C9.14349 18 7.36301 17.2625 6.05025 15.9497C4.7375 14.637 4 12.8565 4 11C4 9.14349 4.7375 7.36301 6.05025 6.05025C7.36301 4.7375 9.14349 4 11 4Z"
        fill="white"
        stroke="#EAAA08"
        strokeWidth="1.4"
      />
      <path
        d="M11 8C11.394 8 11.7841 8.0776 12.148 8.22836C12.512 8.37913 12.8427 8.6001 13.1213 8.87868C13.3999 9.15726 13.6209 9.48797 13.7716 9.85195C13.9224 10.2159 14 10.606 14 11"
        fill="white"
      />
      <path
        d="M11 8C11.394 8 11.7841 8.0776 12.148 8.22836C12.512 8.37913 12.8427 8.6001 13.1213 8.87868C13.3999 9.15726 13.6209 9.48797 13.7716 9.85195C13.9224 10.2159 14 10.606 14 11"
        stroke="#EAAA08"
        strokeWidth="1.4"
      />
    </svg>
  );
};
