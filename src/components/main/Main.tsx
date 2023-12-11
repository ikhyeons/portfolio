import React from "react";
import styled from "styled-components";

import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Section4 from "./section/Section4";
const Smain = styled.main`
  width: 70vw;
  margin: 0 auto;
  margin-top: 150px;
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
