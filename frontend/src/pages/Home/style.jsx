import styled from "styled-components";
import image from "@assets/images/accueil.jpg";

export default styled.div`
  height: 100vh;
  background: url(${image}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 80%;
  display: flex;
  justify-content: center;
  h1 {
    padding-top: 5rem;
    font-size: 4rem;
  }
`;
