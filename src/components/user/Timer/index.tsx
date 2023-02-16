/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const Timer = (props: any) => {
  const swal = withReactContent(Swal);
  const minutes = props.minutes;
  const setMinutes = props.setMinutes;
  const seconds = props.seconds;
  const setSeconds = props.setSeconds;
  const timer = props.timer;
  const setTimer = props.setTimer;
  useEffect(() => {
    if (timer) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setTimer(false);
            swal.fire({
              icon: 'warning',
              text: '인증시간이 만료되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [minutes, seconds, setMinutes, setSeconds, timer, setTimer, swal]);

  return (
    <>
      <S.MinSec>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </S.MinSec>
    </>
  );
};
