import React, {useState, useEffect, useRef} from 'react'
import { use } from 'react';

function StopWatch () {

  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef (0);

  return(
    <></>
  );
}

export default StopWatch