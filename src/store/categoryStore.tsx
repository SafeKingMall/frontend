import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const categoryContext = createContext([]);

const CategoryStore = (props: any) => {
  const location = useLocation();
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
  }, [location.pathname]);
  return <categoryContext.Provider value={categoryData}>{props.children}</categoryContext.Provider>;
};

export default CategoryStore;
