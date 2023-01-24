/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';

interface TimerForm {
  minutes: number;
  seconds: number;
}
export const Timer = () => {
  const [count, setCount] = useState(180);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <>
      <S.MinSec>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </S.MinSec>
    </>
  );
};
