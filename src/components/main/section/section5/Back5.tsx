import styled from "styled-components";
import Card from "./Card";
import projectData from "../../../../projectData";

const Ssection = styled.section`
  position: sticky;
  top: 0;
  height: 100dvh;
  margin-top: 300px;
  background-image: url("../background/paper.jpg");
  isolation: isolate;

  &:after {
    content: "";
    position: absolute;
    background: rgb(30, 40, 30);
    z-index: -1;
    inset: 0;
    opacity: 0.8;
  }
`;

const ScardWrap = styled.div`
  padding: 10px;
  display: grid;
  height: calc(100dvh - 20px);
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 49.5% 49.5%;
`;

function Section5() {
  return (
    <Ssection>
      <ScardWrap>
        {projectData.map((data, i) => (
          <Card data={data} key={i} />
        ))}
        <Card />
      </ScardWrap>
    </Ssection>
  );
}

export default Section5;
