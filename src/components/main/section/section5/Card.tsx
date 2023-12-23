import styled from "styled-components";
import { AModalState } from "../../../../utils/recoilStore/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
const Scard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

const Speriod = styled.div`
  font-weight: bold;
  color: #ff577a;
`;
function Card({ data }: { data?: IprojectData }) {
  const [modalState, setModalState] = useRecoilState(AModalState);
  function paperClickHandler() {
    setModalState({
      isOn: true,
      type: data?.title ? "project" : "more",
      detail: data?.title ? data.title : "More",
    });
  }
  useEffect(() => {
    console.log(modalState.detail);
  }, [modalState]);

  return (
    <Scard
      onClick={() => {
        paperClickHandler();
      }}
    >
      <Stitle
        onClick={() => {
          paperClickHandler();
        }}
      >
        {data?.title ? data.title : "More"}
      </Stitle>
      <br />
      <Speriod>{data?.period}</Speriod>
    </Scard>
  );
}

export default Card;
