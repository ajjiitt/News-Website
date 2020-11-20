import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  //   const apiKey = "d2114502f11a4e069336ee751283862a";.3

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2114502f11a4e069336ee751283862a`
      )
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
