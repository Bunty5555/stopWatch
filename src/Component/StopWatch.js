import React, { useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();
  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  const start = () => {
    myFun();
    setStatus(setInterval(myFun, 10));
  };

  const stop = () => {
    clearInterval(status);
  };
  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };
  const myFun = () => {
    if (updMilli === 100) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMilli++;
    return setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli });
  };
  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 rounded-lg shadow-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-mono bg-white p-4 rounded-lg shadow-md mb-4">
        StopWatch
      </h1>
      <h1 className="text-5xl font-mono p-4 rounded-lg mb-4">
        {time.hr + ":" + time.min + ":" + time.sec + ":" + time.milli}
      </h1>
      <div className="m-4">
        <button
          onClick={start}
          class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-black hover:border-black rounded"
        >
          Start
        </button>
        <button
          onClick={stop}
          class="bg-red-500 hover:bg-red-400 mx-5 text-white font-bold py-2 px-4 border-b-4  border-black hover:border-black rounded"
        >
          Stop
        </button>
        <button
          onClick={reset}
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4  border-black hover:border-black rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
