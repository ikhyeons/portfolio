import React from "react";
import styled from "styled-components";

const Ssection = styled.section`
  position: sticky;
  top: 0;
  height: 100dvh;
  margin-bottom: 0px;
  background-image: url("../background/paper.jpg");
  isolation: isolate;
  &:after {
    content: "";
    position: absolute;
    background: #ff577a;
    z-index: -1;
    inset: 0;
    opacity: 0.4;
  }
`;

function Section2() {
  return <Ssection></Ssection>;
}

export default Section2;
