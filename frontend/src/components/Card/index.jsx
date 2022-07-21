import propTypes from "prop-types";
import SCard from "./style";

export default function Card({ avatar, firstname, lastname, rank, category }) {
  return (
    <SCard>
      <img src={avatar} alt="playerPic" />
      <div className="infos">
        <h2>{lastname}</h2>
        <h2>{firstname}</h2>
        <p>{category}</p>
        <p>{rank} points</p>
      </div>
    </SCard>
  );
}
Card.propTypes = {
  avatar: propTypes.string,
  firstname: propTypes.string,
  lastname: propTypes.string,
  rank: propTypes.number,
  category: propTypes.string,
};
