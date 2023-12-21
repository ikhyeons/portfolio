import React, { useState } from "react";
import projectData from "../../../projectData";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AModalState, AProjectPhase } from "../../../utils/recoilStore/atom";

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
`;

const Stitle = styled.h2`
  width: 95%;
  font-size: 2rem;
  margin: 0 auto;
  margin-bottom: 10px;
  color: black;
  padding-bottom: 10px;
`;

const SsubTitle = styled.span`
  font-size: 1.3rem;
  margin-left: 10px;
  color: skyblue;
  padding-bottom: 10px;
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

const Sp = styled.p`
  color: black;
  margin-left: 10px;
`;
const Scard = styled.div`
  color: black;
`;
const Sdescript = styled.div`
  padding: 10px;
`;
const Simg = styled.img`
  width: 40dvw;
  height: 90%;
  background: yellow;
  margin-bottom: 10px;
`;

function ProjectPaper() {
  const [modalState, setModalState] = useRecoilState(AModalState);
  const [phase, setPhase] = useRecoilState(AProjectPhase);
  const currentProjectData = projectData.filter(
    (data) => data.title == modalState.detail
  )[0];

  return (
    <Swrap
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {currentProjectData && (
        <>
          <Stitle>
            {currentProjectData.title}
            {phase >= 1 ? (
              <SsubTitle>
                {currentProjectData.funtion![phase - 1].name}
              </SsubTitle>
            ) : null}
          </Stitle>

          <ScontentCarouselWrap>
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
              $length={currentProjectData.funtion!.length}
              onClick={() => {
                if (phase >= currentProjectData.funtion!.length) return;
                setPhase((prev) => prev + 1);
              }}
            >
              {">"}
            </SremoconRight>
            <ScontentCarousel $phase={phase}>
              <Scard>
                <Simg
                  key={0}
                  src={`/Imgs/${currentProjectData.type}/${currentProjectData.img}`}
                  alt={currentProjectData.title}
                />
                Skills
                {currentProjectData.skills.fe.length != 0 && (
                  <Sp> FE : {currentProjectData.skills.fe.join(", ")}</Sp>
                )}
                {currentProjectData.skills.be.length != 0 && (
                  <Sp> BE : {currentProjectData.skills.be.join(", ")}</Sp>
                )}
                {currentProjectData.skills.deploy.length != 0 && (
                  <Sp>
                    Deploy : {currentProjectData.skills.deploy.join(", ")}
                  </Sp>
                )}
                <Sdescript style={{ color: "black" }}>
                  {currentProjectData.summary}
                </Sdescript>
              </Scard>
              {currentProjectData?.funtion?.map((data, i) => (
                <Scard key={i + 1}>
                  <Simg
                    src={`/Imgs/${currentProjectData.type}/${data.img}`}
                    alt={data.name}
                  />
                  <Sdescript style={{ color: "black" }}>
                    {data.description}
                  </Sdescript>
                </Scard>
              ))}
            </ScontentCarousel>
          </ScontentCarouselWrap>
        </>
      )}
    </Swrap>
  );
}

export default ProjectPaper;
