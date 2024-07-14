import React, { useState, useEffect } from "react";
import "./launchTimer.css";

interface LaunchTimerProps {
  launchDate: Date;
}

const LaunchTimer: React.FC<LaunchTimerProps> = ({ launchDate }) => {
  const calculateTimeRemaining = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const now = new Date().getTime();
    const launchTime = launchDate.getTime();
    const timeDiff = launchTime - now;

    if (timeDiff <= 0) {
      // Launch has occurred, you can handle this case accordingly
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="container" suppressHydrationWarning>
      <div className="container-segment">
        <div className="segment-title">Days</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{timeRemaining.days}</div>
            <div className="bottom">{timeRemaining.days}</div>
          </div>
        </div>
      </div>

      <div className="container-segment">
        <div className="segment-title">Hours</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{timeRemaining.hours}</div>
            <div className="bottom">{timeRemaining.hours}</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Minutes</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{timeRemaining.minutes}</div>
            <div className="bottom">{timeRemaining.minutes}</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Seconds</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{timeRemaining.seconds}</div>
            <div className="bottom">{timeRemaining.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchTimer;
