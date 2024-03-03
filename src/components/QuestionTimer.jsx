import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTimer] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimer((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
