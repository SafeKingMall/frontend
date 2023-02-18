/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';

export const Refresh = () => {
  const cookie = new Cookies();
  const [, setCookie] = useCookies();

  axios.interceptors.request.use(
    async function (config: any) {
      const accessToken = cookie.get('accessToken');
      const refreshToken = cookie.get('refreshToken');
      if (!accessToken && refreshToken) {
        //엑세트토큰 쿠키만료시간
        const tokenExpires = new Date();
        tokenExpires.setMinutes(tokenExpires.getMinutes() + 1);
        //리프레시토큰 쿠키만료시간
        const rtokenExpires = new Date();
        rtokenExpires.setMinutes(tokenExpires.getMinutes() + 5);
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
            config.headers['Authorization'] = token;
            config.headers['refresh-token'] = rtoken;
            return res.json();
          })
          .then((data) => {
            if (data === 'ROLE_ADMIN') {
              setCookie('loginUser', 'admin', { path: '/', expires: tokenExpires });
            } else if (data === 'ROLE_USER') {
              setCookie('loginUser', 'user', { path: '/', expires: tokenExpires });
            }
            console.log('리프레쉬');
          });
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
};
