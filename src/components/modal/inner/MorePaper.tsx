import React from "react";
import MoreCard from "./MoreCard";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AProjectPhase } from "../../../utils/recoilStore/atom";
import { AlphaState } from "babylonjs";
import { moreData } from "../../../moreData";
const Swrap = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  background: #fafafa;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  box-sizing: border-box;
  cursor: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
  color: black;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 20px;
  }
`;

const ScontentCarouselWrap = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
`;
const ScontentCarousel = styled.div<{ $phase: number }>`
  width: 100%;
  display: flex;
  transform: translateX(
    ${(prop) => (prop.$phase == 0 ? "0" : `${prop.$phase * -100}`)}%
  );
  transition: transform 0.5s;
`;

const SremoconLeft = styled.div<{ $phase: number }>`
  position: absolute;
  display: ${(prop) => (prop.$phase <= 0 ? "none" : "flex")};
  justify-content: center;
  align-items: top;
  font-size: 32px;
  top: 35%;
  left: 10px;
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  z-index: 5;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
`;

const SremoconRight = styled.div<{ $phase: number; $length: number }>`
  position: absolute;
  display: ${(prop) => (prop.$phase >= prop.$length ? "none" : "flex")};
  justify-content: center;
  align-items: top;
  font-size: 32px;
  top: 35%;
  right: 15px;
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  z-index: 5;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
`;

function MorePaper() {
  const [phase, setPhase] = useRecoilState(AProjectPhase);
  return (
    <Swrap
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <SremoconLeft
        $phase={phase}
        onClick={() => {
          if (phase <= 0) return;
          setPhase((prev) => prev - 1);
        }}
      >
        {"<"}
      </SremoconLeft>
      <SremoconRight
        $phase={phase}
        $length={moreData.length - 1}
        onClick={() => {
          if (phase >= moreData.length) return;
          setPhase((prev) => prev + 1);
        }}
      >
        {">"}
      </SremoconRight>
      <ScontentCarouselWrap>
        <ScontentCarousel $phase={phase}>
          {moreData.map((data, i) => (
            <MoreCard key={i} data={data} />
          ))}
        </ScontentCarousel>
      </ScontentCarouselWrap>
    </Swrap>
  );
}

export default MorePaper;
