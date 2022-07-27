import propTypes from "prop-types";
import SArticle from "./style";

export default function Article({ title, body, author, date }) {
  return (
    <SArticle>
      <h1>{title}</h1>
      <p>{body}</p>
      <h2>{author}</h2>
      <h3>écrit le {date}</h3>
    </SArticle>
  );
}
Article.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
