import React from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

export const QnA = () => {
  const navigate = useNavigate();
  // const [error, setError] = useState(null);
  // const [loaded, setLoaded] = useState(false);
  // const [data2, setData2] = useState([])
  // console.log(data2)

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
    <S.Wrapper>
      <div>
        <S.Banner>QnA</S.Banner>
      </div>
      <S.Container>
        <QnAList
        // loaded={loaded}
        // error={error}
        />
        <S.QnAButton onClick={() => navigate('/qna-wr')}>글쓰기</S.QnAButton>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
