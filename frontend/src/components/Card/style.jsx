import styled from "styled-components";

export default styled.div`
  position: relative;
  height: 250px;
  width: 200px;
  border-radius: 4px;
  transition: 0.5s;
  color: white;
  display: flex;
  justify-content: center;
  margin: 0.3em;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
  &:hover .infos {
    opacity: 1;
    transform: scaleY(1);
  }
  .infos {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.589);
    color: $white;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    opacity: 0;
    transform: scaleY(0);
    transition: 0.3s;
  }
  img {
    object-fit: cover;
    height: 250px;
    width: 200px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  }
`;
