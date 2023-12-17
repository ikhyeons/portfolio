import styled from "styled-components";
import SkillPaper from "./inner/SkillPaper";
import ProjectPaper from "./inner/ProjectPaper";
import { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { AModalState } from "../../utils/recoilStore/atom";
const SModalWrap = styled.div<{
  $modalState: ImodalState;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
  mouse-events: none;
  transform: ${(prop) => (prop.$modalState.isOn ? null : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

function ModalWrap() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalState, setModalState] = useRecoilState(AModalState);
  const resetModal = useResetRecoilState(AModalState);
  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const { body } = document;
    modalState.isOn
      ? body.addEventListener("wheel", preventScroll, { passive: false })
      : null;

    return () => {
      body.removeEventListener("wheel", preventScroll);
    };
  }, [modalState]);

  return (
    <SModalWrap
      ref={modalRef}
      $modalState={modalState}
      onClick={() => {
        resetModal();
      }}
    >
      {modalState.type == "skill" ? <SkillPaper /> : <ProjectPaper />}
    </SModalWrap>
  );
}

export default ModalWrap;
