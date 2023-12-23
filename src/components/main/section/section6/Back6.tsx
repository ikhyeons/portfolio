import styled from "styled-components";
import { useRef, useEffect } from "react";
import BabylonWrap from "../../../babylon/BabylonWrap";
const Ssection = styled.section`
  display: flex;
  position: sticky;
  box-sizing: border-box;
  top: 0;
  height: 100dvh;
  margin-top: 600px;
  background-image: url("../background/paper.jpg");
  isolation: isolate;
  padding: 40px;
  &:after {
    content: "";
    position: absolute;
    background: rgb(30, 40, 30);
    z-index: -1;
    inset: 0;
    opacity: 0.8;
  }
`;

const Thank = styled.div`
  position: absolute;
  left: 10%;
  top: 30%;
  font-size: 4rem;
`;

const Info = styled.div`
  font-size: 2.5rem;
  position: absolute;
  bottom: 10px;
  & > span {
    margin-right: 30px;
  }
`;

const BabylonBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 120px;
  transform: translateX(-50%);
  width: 100%;
`;

function Section6() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    var intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio <= 0) {
        console.log("사라짐4");
        return;
      }
      console.log("보임4");
    });
    sectionRef.current && intersectionObserver.observe(sectionRef.current);
  }, []);

  return (
    <Ssection ref={sectionRef}>
      <Thank>Thank You</Thank>
      {/* <BabylonBox>
        <BabylonWrap />
      </BabylonBox> */}
      <Info>
        <span>skantrkwl789@naver.com</span>
        <span>https://github.com/ikhyeons</span>
        <span>https://blog.ikhyeons.net</span>
      </Info>
    </Ssection>
  );
}

export default Section6;
