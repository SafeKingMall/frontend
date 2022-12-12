import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { TfiLock } from 'react-icons/tfi';

export const QnAList = (props: any) => {
  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    navigate('/qna-pw', {
      state: {
        data: item,
      },
    });
  };

  const RegistDate = (day: any) => {
    const date = new Date(day);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const date2 = date.getDate();

    return `${year}-${month >= 10 ? month : '0' + month}-${date2 >= 10 ? date2 : '0' + date2}`;
  };

  const QnAdataList2 = (data: any) => {
    return (
      <ul>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveQnApw(el)}>
              <div>{el.itemQuestionId}</div>
              <div>
                <ul>{el.title}</ul>
                <TfiLock color='#D9D9D9' />
              </div>
              <div>{el.memberId}</div>
              <div>{RegistDate(el.createDate)}</div>
            </S.Container>
          );
        })}
      </ul>
    );
  };

  return <S.Wrapper>{QnAdataList2(props.currentItems)}</S.Wrapper>;
};
