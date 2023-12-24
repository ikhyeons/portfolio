import React from "react";
import styled from "styled-components";
const Stitle = styled.h2`
  display: inline;
  color: black;
  margin-left: 20px;
  margin-bottom: 40px;
`;

const Speriod = styled.h2`
  display: inline;
  color: black;
  margin-left: 20px;
  margin-bottom: 40px;
  font-size: 1rem;
  color: skyblue;
`;
const Simg = styled.img`
  width: 40dvw;
  height: 90%;
  background: yellow;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 80dvw;
  }
`;
const Sdescript = styled.div`
  color: black;
  padding: 10px;
`;
function MoreCard({ data }: { data: ImoreData }) {
  return (
    <div>
      <Stitle>{data.title}</Stitle>
      <Speriod>{data.period}</Speriod>
      <Simg src={`/Imgs/more/${data.img}`} alt={data.title} />
      <Sdescript>{data.summary}</Sdescript>
    </div>
  );
}

export default MoreCard;
