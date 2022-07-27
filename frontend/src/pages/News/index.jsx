import Article from "@components/Article";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SNews from "./style";

function News() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contents/`)
      .then(({ data }) => {
        setContent(data);
      });
  }, []);
  return (
    <>
      <SNews>
        <h1>Ici les News du club!</h1>
      </SNews>
      {content.map((article) => {
        return (
          <Article
            title={article.title}
            body={article.body}
            author={article.author}
            date={article.date}
          />
        );
      })}
    </>
  );
}

export default News;
