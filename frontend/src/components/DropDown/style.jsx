import styled from "styled-components";

export default styled.div`
  .services-submenu {
    width: 10rem;
    position: absolute;
    top: 6rem;
    left: 39%;
    list-style: none;
    text-align: start;
  }

  .services-submenu li {
    background: rgb(191, 195, 195);
    cursor: pointer;
  }

  .services-submenu li a:hover {
    background: rgb(170, 175, 175);
  }

  .services-submenu.clicked {
    display: none;
  }

  .submenu-item {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    padding: 16px;
  }
`;
