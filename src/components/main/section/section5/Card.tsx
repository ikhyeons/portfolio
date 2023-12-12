import styled from "styled-components";

const Scard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border: 10px solid #ff577a;
    box-sizing: border-box;
    background: #ffaaaa33;
  }
`;

const Stitle = styled.div`
  font-size: 2rem;
`;
function Card({ data }: { data?: IprojectData }) {
  return (
    <Scard>
      <Stitle>{data?.title ? data.title : "More"}</Stitle>
    </Scard>
  );
}

export default Card;
