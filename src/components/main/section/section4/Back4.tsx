import styled from "styled-components";
import Card from "./Card";
import projectData from "../../../../projectData";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { AcurrentPosition } from "../../../../utils/recoilStore/atom";
const Ssection = styled.section`
  position: sticky;
  top: 0;
  height: 100dvh;
  margin-top: 100px;
  background-image: url("./background/paper.jpg");
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
  padding-top: 60px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 49.5% 49.5%;
    grid-template-rows: 33% 33% 33%;
  }
`;

function Section5() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPosition, setCurrentPosition] =
    useRecoilState(AcurrentPosition);

  const intersectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0.1) {
      if (currentPosition == "PROJECTS") setCurrentPosition("SKILLS");
      return;
    }
    setCurrentPosition("PROJECTS");
  });
  sectionRef.current && intersectionObserver.observe(sectionRef.current);

  return (
    <Ssection ref={sectionRef}>
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
