import styled from "styled-components";
import Card from "./Card";
import projectData from "../../../../projectData";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { AcurrentPosition } from "../../../../utils/recoilStore/atom";
const Ssection = styled.section`
  position: sticky;
  top: 0;
  height: 100dvh;
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

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    padding-top: 60px;
    grid-template-columns: 49.5% 49.5%;
    grid-template-rows: 31% 31% 31%;
  }
`;

function Section5() {
  const sectionRef = useRef<HTMLElement>(null);
  const [, setCurrentPosition] = useRecoilState(AcurrentPosition);
  let first = true;

  function setDown(before: number, current: 1 | 2 | 3 | 4) {
    console.log("change " + before + "to " + current);
    console.log(first);
    if (!first) setCurrentPosition(current);
    first = false;
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? setCurrentPosition(3) : setDown(3, 2);
      entries[0].isIntersecting ? console.log(1) : console.log(2);
    });
    sectionRef.current && intersectionObserver.observe(sectionRef.current);
    return () => intersectionObserver.unobserve(sectionRef.current!);
  }, []);
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
