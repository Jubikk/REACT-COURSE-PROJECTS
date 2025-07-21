import React, {useState, useEffect, useRef} from 'react'
import { use } from 'react';

function StopWatch () {

  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef (0);

  useEffect(() => {

  },[isRunning]);

  function start(){
    setisRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    
  }

  function stop (){
    setisRunning(false);
  }

  function reset () {

  }

  function formatTime(){
  
    return "00:00:00";
  }
  return(
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={reset} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default StopWatch