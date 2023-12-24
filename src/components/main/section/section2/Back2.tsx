import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AcurrentPosition } from "../../../../utils/recoilStore/atom";

const Ssection = styled.section`
  position: sticky;
  top: 0;
  height: 100dvh;
  margin-bottom: 0px;
  background-image: url("./background/paper.jpg");
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
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPosition, setCurrentPosition] =
    useRecoilState(AcurrentPosition);

  const intersectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0.1) {
      if (currentPosition == "SKILLS") setCurrentPosition("ABOUT ME");
      return;
    }
    setCurrentPosition("SKILLS");
  });
  sectionRef.current && intersectionObserver.observe(sectionRef.current);

  return <Ssection ref={sectionRef}></Ssection>;
}

export default Section2;
