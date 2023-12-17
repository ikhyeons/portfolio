import React from "react";
import projectData from "../../../projectData";
import styled from "styled-components";

const Swrap = styled.div`
  width: 40%;
  margin: 0 auto;
  background: #fafafa;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
  cursor: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
`;
function ProjectPaper() {
  return (
    <Swrap
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      gd
    </Swrap>
  );
}

export default ProjectPaper;
