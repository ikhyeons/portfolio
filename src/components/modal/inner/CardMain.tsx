import styled from "styled-components";

const Sp = styled.p`
  color: black;
  margin-left: 10px;
`;
const Scard = styled.div`
  color: black;
`;

const Sskill = styled.div`
  color: black;
  margin-left: 10px;
`;
const Sdescript = styled.div`
  padding: 10px;
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

function CardMain({
  currentProjectData,
}: {
  currentProjectData: IprojectData;
}) {
  return (
    <Scard>
      <Simg
        key={0}
        src={`./Imgs/${currentProjectData.type}/${currentProjectData.img}`}
        alt={currentProjectData.title}
      />
      <Sskill>
        Skills
        {currentProjectData.skills.fe.length != 0 && (
          <Sp> FE : {currentProjectData.skills.fe.join(", ")}</Sp>
        )}
        {currentProjectData.skills.be.length != 0 && (
          <Sp> BE : {currentProjectData.skills.be.join(", ")}</Sp>
        )}
        {currentProjectData.skills.deploy.length != 0 && (
          <Sp>Deploy : {currentProjectData.skills.deploy.join(", ")}</Sp>
        )}
      </Sskill>
      <Sdescript style={{ color: "black" }}>
        {currentProjectData.summary}
      </Sdescript>
    </Scard>
  );
}

export default CardMain;
