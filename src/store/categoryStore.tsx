import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const categoryContext = createContext([]);

const CategoryStore = (props: any) => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getCategoryData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
      }).then((res) => {
        setCategoryData(res.data.content);
      });
    };
    getCategoryData();
  }, []);
  return <categoryContext.Provider value={categoryData}>{props.children}</categoryContext.Provider>;
};

export default CategoryStore;
