import styled from "styled-components";

/**
 * position, color, background 설정하기
 */
export const ScircleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  border: none;
  box-shadow: 1px 1px 3px rgb(80, 90, 80);
  cursor: pointer;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

export default ScircleBtn;
