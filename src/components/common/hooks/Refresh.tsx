/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Refresh = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [, setCookie] = useCookies();

  axios.interceptors.request.use(
    async function (config: any) {
      // const accessToken = cookie.get('accessToken');
      const refreshToken = cookie.get('refreshToken');
      const tokenTimeOut = cookie.get('tokenTime');
      const rtokenTimeOut = cookie.get('rtokenTime');
      let curTime = new Date();
      if (curTime.getTime() >= tokenTimeOut && curTime.getTime() < rtokenTimeOut) {
        //엑세트토큰 쿠키만료시간
        const tokenExpires = new Date();
        tokenExpires.setMinutes(tokenExpires.getMinutes() + 20);
        //리프레시토큰 쿠키만료시간
        const rtokenExpires = new Date();
        rtokenExpires.setMinutes(rtokenExpires.getMinutes() + 60);
        try {
          await fetch(`${process.env.REACT_APP_API_URL}/refresh`, {
            headers: {
              'refresh-token': refreshToken,
            },
          })
            .then((res) => {
              const token = res.headers.get('Authorization');
              const rtoken = res.headers.get('refresh-token');
              setCookie('accessToken', token, { path: '/', expires: tokenExpires });
              setCookie('refreshToken', rtoken, { path: '/', expires: rtokenExpires });
              setCookie('tokenTime', tokenExpires.getTime(), { path: '/', maxAge: 60 * 60 * 24 });
              setCookie('rtokenTime', rtokenExpires.getTime(), { path: '/', maxAge: 60 * 60 * 24 });
              config.headers['Authorization'] = token;
              config.headers['refresh-token'] = rtoken;
              return res.json();
            })
            .then((data) => {
              if (data === 'ROLE_ADMIN') {
                setCookie('loginUser', 'admin', { path: '/', expires: rtokenExpires });
              } else if (data === 'ROLE_USER') {
                setCookie('loginUser', 'user', { path: '/', expires: rtokenExpires });
              }
            });
        } catch (err) {
          cookie.remove('accessToken');
          cookie.remove('refreshToken');
          cookie.remove('loginUser');
          navigate('/sign-in');
        }
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
};
