import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Footer from "./Footer.js";
import Marque from "./Marque.js"
function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">!-!-!-!-NEWS TIMES-!-!-!-!</h1>
      <Marque/>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
      <Footer/>
    </div>
  );
}

export default News;
