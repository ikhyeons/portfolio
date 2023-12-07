import React from "react";
import styled from "styled-components";

import Section1 from "./section/Section4";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Section4 from "./section/Section4";
const Smain = styled.main`
  border: 1px solid black;
  width: 80vw;
  margin: 0 auto;
`;
function Main() {
  return (
    <Smain>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Smain>
  );
}

export default Main;
