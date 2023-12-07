import React from "react";
import styled from "styled-components";

const Stl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Str = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const Sbl = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Sbr = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
function Sides() {
  return (
    <>
      <Stl>Phase</Stl>
      <Str>blog / github</Str>
      <Sbl>theme</Sbl>
      <Sbr>Top</Sbr>
    </>
  );
}

export default Sides;
