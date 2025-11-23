import { useEffect, useState } from "react";

export default function TimeLeft() {
  const birthTime = new Date("1983-09-11T00:00:00").getTime();
  const lifespan = 81 * 365.25 * 24 * 60 * 60 * 1000; // 81 years in milliseconds
  const [age, setAge] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const now = Date.now();
      const ageInMilliseconds = now - birthTime;
      const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
      const timeLeftInYears = (lifespan - ageInMilliseconds) / (365.25 * 24 * 60 * 60 * 1000);
      setAge(ageInYears);
      setTimeLeft(timeLeftInYears);
    };

    updateAge();
    const interval = setInterval(updateAge, 1);

    return () => clearInterval(interval);
  }, [birthTime]);

  return (
    <div className="group relative min-h-10">
      <div className="transition duration-500 absolute top-0 opacity-100 group-hover:opacity-0">{age.toFixed(20)}</div>
      <div className="transition duration-500 absolute whitespace-nowrap top-0 opacity-0 group-hover:opacity-100">{timeLeft.toFixed(20)} ETD</div>
    </div>
  );
}
