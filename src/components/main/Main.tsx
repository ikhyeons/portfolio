import styled from "styled-components";
import Back1 from "./section/section1/Back1";
import Back2 from "./section/section2/Back2";
import Back3 from "./section/section3/Back3";
import Back4 from "./section/section4/Back4";
import Back5 from "./section/section5/Back5";
import Sides from "../side/Side";
import Header from "../header/Header";

const Smain = styled.main`
  width: 81vw;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
function Main() {
  return (
    <>
      <Header />
      <Smain>
        <Back1 />
        <Back2 />
        <Back3 />
        <Back4 />
        <Back5 />
      </Smain>
      <Sides />
    </>
  );
}

export default Main;
