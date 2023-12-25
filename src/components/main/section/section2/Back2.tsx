import { useEffect, useRef } from "react";
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
      entries[0].isIntersecting ? setCurrentPosition(2) : setDown(2, 1);
      entries[0].isIntersecting ? console.log(1) : console.log(2);
    });
    sectionRef.current && intersectionObserver.observe(sectionRef.current);

    return () => intersectionObserver.unobserve(sectionRef.current!);
  }, []);

  return <Ssection ref={sectionRef}></Ssection>;
}

export default Section2;
