import ScircleBtn from "./CircleBtn";
import styled from "styled-components";

const DropDown = styled(ScircleBtn)`
  width: 50px;
  height: 50px;
  background: rgb(30, 40, 30);
  font-size: 1.4rem;
  color: #ff577a;
  display: flex;

  &:before {
    display: block;
    margin-bottom: 3px;
    content: " ";
    width: 20px;
    height: 2px;
    background: #ff577a;
  }

  &:after {
    display: block;
    content: " ";
    width: 15px;
    height: 2px;
    background: #ff577a;
  }
`;
function PhaseDropDown() {
  return (
    <div>
      <DropDown></DropDown>
    </div>
  );
}

export default PhaseDropDown;
