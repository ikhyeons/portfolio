import styled from "styled-components";

import Back1 from "./section/section1/Back1";
import Back2 from "./section/section2/Back2";
import Back3 from "./section/section3/Back3";
import Back5 from "./section/section5/Back5";
import Back6 from "./section/section6/Back6";
import Sides from "../side/Side";

const Smain = styled.main`
  width: 81vw;
  margin: 0 auto;
`;
function Main() {
  return (
    <>
      <Smain>
        <Back1 />
        <Back2 />
        <Back3 />
        <Back5 />
        <Back6 />
      </Smain>
      <Sides />
    </>
  );
}

export default Main;
