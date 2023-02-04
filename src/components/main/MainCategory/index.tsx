import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const MainCategory = (props: any) => {
  const category = props.category;
  const selectedCategory = props.selectedCategory;
  const setSelectedCategory = props.setSelectedCategory;
  const navigate = useNavigate();

  //카테고리 클릭 시 변경
  const onChangeCategory = (cur: string) => {
    if (selectedCategory !== cur) {
      setSelectedCategory(cur);
    }
  };

  //더보기 버튼 이벤트
  const moreList = () => {
    const categoryArr = category.map((el: any) => el.name);
    const categoryNum = categoryArr.indexOf(selectedCategory) + 1;
    navigate(`/itemList-${categoryNum}`);
  };

  const selectedStyle = {
    color: '#289951',
    fontWeight: 700,
  };

  return (
    <S.Container>
      <S.CategoryWrap>
        <S.Title>메인 카테고리</S.Title>
        <S.CategoryNavArea>
          {category.map((el: any) => {
            return (
              <S.CategorySelect
                key={el.id}
                onClick={() => onChangeCategory(el.name)}
                style={selectedCategory === el.name ? selectedStyle : {}}
              >
                {el.name}
              </S.CategorySelect>
            );
          })}
        </S.CategoryNavArea>
        <S.SelectedCategoryArea>
          <S.SelectedCategory>{selectedCategory}</S.SelectedCategory>
          <S.More onClick={() => moreList()}>더 보기 +</S.More>
        </S.SelectedCategoryArea>
      </S.CategoryWrap>
    </S.Container>
  );
};
