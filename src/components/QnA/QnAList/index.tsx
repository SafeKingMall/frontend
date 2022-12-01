import * as S from './style';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

export const QnAList = (props: any) => {
  let currentItems = props.currentItems;
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
              <div>{el.title}</div>
              <div>{el.memberId}</div>
              <div>{RegistDate(el.createDate)}</div>
            </S.Container>
          );
        })}
      </ul>
    );
  };

  return <S.Wrapper>{QnAdataList2(currentItems)}</S.Wrapper>;
};
