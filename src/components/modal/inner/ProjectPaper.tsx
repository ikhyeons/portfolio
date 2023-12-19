import React, { useEffect } from "react";
import projectData from "../../../projectData";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AModalState } from "../../../utils/recoilStore/atom";

const Swrap = styled.div`
  width: 40%;
  margin: 0 auto;
  background: #fafafa;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  box-sizing: border-box;
  cursor: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
  color: black;
`;

const Stitle = styled.h2`
  font-size: 2rem;
  color: black;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const Simg = styled.img`
  margin-bottom: 10px;
`;
const Ssummary = styled.div`
  color: black;
`;
function ProjectPaper() {
  const [modalState, setModalState] = useRecoilState(AModalState);
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
          <Stitle>{currentProjectData.title}</Stitle>
          <Simg
            src={`/Imgs/${currentProjectData.img}`}
            alt={currentProjectData.title}
          />
          <Ssummary>{currentProjectData.summary}</Ssummary>
        </>
      )}
    </Swrap>
  );
}

export default ProjectPaper;
