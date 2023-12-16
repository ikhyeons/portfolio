import styled from "styled-components";
import SkillPage from "./inner/SkillPage";
import Project from "./inner/Project";
import { useEffect, useRef } from "react";

const SModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
  mouse-events: none;
  transform: translateX(-100%);
`;

function ModalWrap() {
  const modalRef = useRef<HTMLDivElement>(null);

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const { body } = document;
    body.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      body.removeEventListener("wheel", preventScroll);
    };
  }, []);

  return <SModalWrap ref={modalRef}></SModalWrap>;
}

export default ModalWrap;
