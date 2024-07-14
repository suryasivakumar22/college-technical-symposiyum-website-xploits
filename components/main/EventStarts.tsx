import React, { useState, useEffect } from "react";

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
    <div>
      <div>
        <span>Events Starts on: </span>
        <span>{timeRemaining.days}D:</span>
        <span>{timeRemaining.hours}H:</span>
        <span>{timeRemaining.minutes}M:</span>
        <span>{timeRemaining.seconds}S</span>
      </div>
    </div>
  );
};

export default LaunchTimer;
