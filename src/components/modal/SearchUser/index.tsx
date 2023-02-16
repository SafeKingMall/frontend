import React from 'react';
import * as S from './style';
import { SearchId } from './SearchId';

import { SearchPw } from './SearchPw';

import { useState } from 'react';

export const SearchUser = (props: any) => {
  const [currentTab, setTab] = useState(0);
  //저장된 id값
  const [userId, setUserId] = useState('');
  const selectMenuHandler = (index: any) => {
    setTab(index);
  };
  const menuArr = [
    {
      name: '아이디 찾기',
      content: (
        <SearchId setTab={setTab} onOpen={props.onOpen} setUserId={setUserId} userId={userId} />
      ),
    },
    { name: '비밀번호 찾기', content: <SearchPw onOpen={props.onOpen} /> },
  ];

  return (
    <S.PopUpContainer onClick={props.onOpen}>
      <S.PopUpBody onClick={(e: any) => e.stopPropagation()}>
        <S.TabMenu>
          {menuArr.map((tap, index) => {
            return (
              <ul
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}
              >
                {tap.name}
              </ul>
            );
          })}
        </S.TabMenu>
        <div>
          {/* <AdimWdList /> */}
          <div>{menuArr[currentTab].content}</div>
        </div>
      </S.PopUpBody>
    </S.PopUpContainer>
  );
};
