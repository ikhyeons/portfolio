import styled from "styled-components";
import { useRef } from "react";

import { useRecoilState } from "recoil";
import { AcurrentPosition } from "../../../../utils/recoilStore/atom";
const Ssection = styled.section`
  display: flex;
  position: sticky;
  box-sizing: border-box;
  top: 0;
  height: 100dvh;
  margin-top: 600px;
  background-image: url("./background/paper.jpg");
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
  font-size: 33vw%;
  position: absolute;
  bottom: 10px;
  & > span {
    margin-right: 30px;
  }

  @media screen and (max-width: 768px) {
    & > span {
      font-size: 1rem;
      display: block;
    }
  }
`;

function Section6() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPosition, setCurrentPosition] =
    useRecoilState(AcurrentPosition);

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
