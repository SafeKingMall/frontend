import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const NoticeList = (props: any) => {
  let currentItems = props.currentItems;
  const navigate = useNavigate();
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
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

  const NoticedataList2 = (data: any) => {
    return (
      <ul>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveNoticepo(el)}>
              <div>{el.id}</div>
              <div>{el.title}</div>
              <div>
                {Object.keys(el).includes('lastModifiedDate')
                  ? RegistDate(el.lastModifiedDate)
                  : RegistDate(el.createDate)}
              </div>
            </S.Container>
          );
        })}
      </ul>
    );
  };

  return <S.Wrapper>{NoticedataList2(currentItems)}</S.Wrapper>;
};
