import React from "react";
import { skillList } from "../../../skillData";
import Gage from "./Gage";
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
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
  cursor: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px black;
`;
const Stitle = styled.h1`
  color: black;
`;

const Sname = styled.h2`
  color: black;
`;
const Sskill = styled.div``;
function SkillPaper() {
  const [modalState, setModalState] = useRecoilState(AModalState);
  console.log(modalState.detail);
  console.log(skillList);
  return (
    <Swrap
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Stitle>{modalState.detail}</Stitle>
      {skillList.map((data, i) => {
        if (data.detail == modalState.detail) {
          return data.skillList.map((data2, i) => (
            <Sskill key={i}>
              <Sname>{data2.name}</Sname>
              <Gage gage={data2.gage} />
            </Sskill>
          ));
        }
      })}
    </Swrap>
  );
}

export default SkillPaper;
