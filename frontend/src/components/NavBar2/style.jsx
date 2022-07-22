import styled from "styled-components";

export default styled.div`
  display: flex;
  .navbar {
    height: 10vh;
    background: #1b1919;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-logo {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
  }

  .nav-items {
    display: flex;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: space-around;
    margin-right: 2rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 10vh;
  }

  .nav-item a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    margin-right: 2rem;
    padding: 6px 16px;
    border-radius: 5px;
    font-family: "Gill Sans", sans-serif;
  }

  .nav-item a:hover {
    background: rgb(210, 220, 220);
  }

  img {
    height: 10rem;
    position: absolute;
    top: 0rem;
    left: 1rem;
  }
`;
