import styled from "styled-components";
import BabylonWrap from "../../../babylon/BabylonWrap";
import { useEffect, useRef } from "react";
const Ssection = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  height: 100dvh;
  margin-bottom: 60px;
  transform: translateX(0%);
  background-image: url("../background/paper.jpg");
  isolation: isolate;
  &:after {
    content: "";
    position: absolute;
    background: rgb(20, 30, 20);
    z-index: -1;
    inset: 0;
    opacity: 0.8;
  }
`;

const BabylonDiv = styled.div`
  margin: 10vh 0;
  width: 80%;
  height: 80vh;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  right: 1%;
  font-size: 4rem;
  color: #ff577a;
  pointer-events: none;
`;

const Developer = styled.div`
  color: #ff577a;
  transform: translateY(-100%);
`;

const Comment = styled.div`
  transform: translateY(-50%);
  font-size: 1.5rem;
`;

//ff577a

function Section1() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    var intersectionObserver = new IntersectionObserver(function (entries) {
      // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로
      // 아무것도 하지 않음
      if (entries[0].intersectionRatio < 0) {
        console.log("사라짐1");
        return;
      }

      console.log("보임1");
    });
    sectionRef.current && intersectionObserver.observe(sectionRef.current);
  }, []);
  return (
    <Ssection ref={sectionRef}>
      <Info>
        <Developer>FrontEnd Developer</Developer>
        <Comment>
          안녕하세요.
          <br />
          도전하는 개발자{" "}
          <span style={{ color: "#ff577a", fontSize: "2rem" }}>
            성익현
          </span>{" "}
          입니다.
        </Comment>
      </Info>
    </Ssection>
  );
}

export default Section1;
