import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminMemberList } from '../../../components/Edit/AdimMemberList/AdminMemberList';
import { AdimWdList } from '../../../components/Edit/AdimMemberList/AdminWdList';
import { useState } from 'react';

export const AdminMember = () => {
  const [currentTab, setTab] = useState(0);

  const menuArr = [
    { name: '회원', content: <AdminMemberList /> },
    { name: '탈퇴회원관리', content: <AdimWdList /> },
  ];

  const selectMenuHandler = (index: any) => {
    setTab(index);
  };

  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <S.TabMenu>
            {menuArr.map((tap, index) => {
              return (
                <div
                  key={index}
                  className={currentTab === index ? 'submenu focused' : 'submenu'}
                  onClick={() => selectMenuHandler(index)}
                >
                  {tap.name}
                </div>
              );
            })}
          </S.TabMenu>
          <div>
            <div>{menuArr[currentTab].content}</div>
          </div>
        </S.Wrapper>
      </S.Container>
    </div>
  );
};
