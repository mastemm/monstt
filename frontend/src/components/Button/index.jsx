import React from "react";
import { Link } from "react-router-dom";
import SButton from "./style";

function Button() {
  return (
    <SButton>
      <Link to="sign-up">
        <button className="btn" type="button">
          Connexion
        </button>
      </Link>
    </SButton>
  );
}

export default Button;
