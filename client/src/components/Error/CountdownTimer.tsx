import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: number; // Unix timestamp representing the target date
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <ul className="flex space-x-6">
        <li className="text-center">
          <span className="text-4xl font-bold text-primary">
            {timeLeft.days}
          </span>
          <p className="text-sm mt-1 text-gray-600">days</p>
        </li>
        <li className="text-center">
          <span className="text-4xl font-bold text-primary">
            {timeLeft.hours}
          </span>
          <p className="text-sm mt-1 text-gray-600">hours</p>
        </li>
        <li className="text-center">
          <span className="text-4xl font-bold text-primary">
            {timeLeft.minutes}
          </span>
          <p className="text-sm mt-1 text-gray-600">minutes</p>
        </li>
        <li className="text-center">
          <span className="text-4xl font-bold text-primary">
            {timeLeft.seconds}
          </span>
          <p className="text-sm mt-1 text-gray-600">seconds</p>
        </li>
      </ul>
    </div>
  );
};

export default CountdownTimer;
