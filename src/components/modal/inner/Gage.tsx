import styled from "styled-components";
import { FadeIn, gageUp } from "../../../animation";

const SGage = styled.div`
  width: 100%;
  height: 20px;
  background-color: white;
  display: flex;
  position: relative;
`;
const SBar = styled.div<{ gage: number }>`
  animation: ${gageUp} 2s;
  width: ${(props) => props.gage}%;
  height: 100%;
  background-color: ${(props) => {
    if (props.gage <= 30) return "#ff5757";
    else if (props.gage <= 60) return "#c69aff";
    else return "#4affde";
  }};
  &::after {
    font-size: 18px;
    position: absolute;
    left: ${(props) => props.gage}%;
    transform: translate(-50%, 20px);
    content: "${(props) => {
      if (props.gage <= 30) return "Know";
      else if (props.gage <= 60) return "Tried";
      else return "Familiar";
    }}";
    color: black;
    animation: ${FadeIn} 1s;
  }
`;

function Gage({ gage }: { gage: number }) {
  return (
    <SGage>
      <SBar gage={gage} />
    </SGage>
  );
}

export default Gage;
