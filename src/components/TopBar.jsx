import React, { useState, useEffect } from "react";

export default function TopBar() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <header className="w-full bg-teal-400 p-2 text-center text-black">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <p className="text-md sm:text-base ">
          Transform your career with MentorPick | Grab scholarships worth ₹60,000 |{'  '}
          <a href="/apply" className="font-bold underline hover:text-teal-800">
            Apply Now
          </a>
        </p>
        <div className="flex items-center justify-center ml-4">
          {/* Box for Days */}
          <div className="mx-1 flex flex-col items-center">
            <div className="bg-green-900 text-cyan-400 px-3 py-1 rounded-md text-center shadow-lg font-bold" >
              {timeLeft.days || "0"}
            </div>
            <span className="text-xs">Days</span>
          </div>

          {/* Box for Hours */}
          <div className="mx-1 flex flex-col items-center">
            <div className="bg-green-900 text-cyan-400 px-3 py-1 rounded-md text-center shadow-lg font-bold">
              {timeLeft.hours || "0"}
            </div>
            <span className="text-xs">Hours</span>
          </div>

          {/* Box for Minutes */}
          <div className="mx-1 flex flex-col items-center">
            <div className="bg-green-900 text-cyan-400 px-3 py-1 rounded-md text-center shadow-lg font-bold">
              {timeLeft.minutes || "0"}
            </div>
            <span className="text-xs">Minutes</span>
          </div>

          {/* Box for Seconds */}
          <div className="mx-1 flex flex-col items-center">
            <div className="bg-green-900 text-cyan-400 px-3 py-1 rounded-md text-center shadow-lg font-bold">
              {timeLeft.seconds || "0"}
            </div>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
    </header>
  );
}
