import styled from "styled-components";

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

  @media screen and (max-width: 768px) {
    width: 80dvw;
  }
`;

function ProjectCard({
  currentProjectData,
  data,
}: {
  currentProjectData: IprojectData;
  data: {
    name: string;
    description: string;
    img: string;
  };
}) {
  return (
    <Scard>
      <Simg
        src={`/Imgs/${currentProjectData.type}/${data.img}`}
        alt={data.name}
      />
      <Sdescript style={{ color: "black" }}>{data.description}</Sdescript>
    </Scard>
  );
}

export default ProjectCard;
