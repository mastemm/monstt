/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";

export default styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    margin: 30px;
    list-style: none;
    font-size: 2rem;
    /* position: relative; */
  }
  a {
    text-decoration: none;
    padding: 10px;
  }
  li {
    color: #282c34;
    transition: 0.2s;
    cursor: pointer;
  }
  li:hover {
    color: #61dafb;
  }

  img {
    height: 10rem;
    position: absolute;
    top: 0rem;
    left: 1rem;
  }

  .nav-active {
    position: relative;
  }
  .nav-active:after {
    content: "";
    height: 4px;
    width: 0;
    background: #282c34;
    position: absolute;
    border-radius: 10px;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-animation: anim 0.3s ease forwards;
    animation: anim 0.6s ease forwards;

    @-webkit-keyframes anim {
      to {
        width: 100%;
      }
    }
    @keyframes anim {
      to {
        width: 100%;
      }
    }
  }
`;
