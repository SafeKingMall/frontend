import React from 'react';
import * as S from './style';
import db from '../../db.json';
import { NoticeList } from '../../components/notice/NoticeList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

export const Notice = () => {
  const navigate = useNavigate();
  const data1 = db.noticecontents;
  // const [error, setError] = useState(null);
  // const [loaded, setLoaded] = useState(false);
  // const [data2, setData2] = useState([])
  // console.log(data2)
  const data = [...data1].reverse();

  // useEffect(()=>{

  //   axios.get('').then((res)=>{
  //     setData2(res.data)
  //   console.log(res.data)
  //   setLoaded(true);

  //   }).catch((err)=>{
  //     console.log(err)
  //     setLoaded(true);
  //     setError(error);
  //   })
  // },[])

  return (
    <div>
      <div>
        <S.Banner>Notice</S.Banner>
      </div>
      <S.Wrapper>
        <NoticeList
          // loaded={loaded}
          // error={error}
          data={data}
        />
        <S.NoticeButton onClick={() => navigate('/notice-wr')}>글쓰기</S.NoticeButton>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
