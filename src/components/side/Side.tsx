import styled from "styled-components";
import ScircleBtn from "../buttons/CircleBtn";
import ToggleBtn from "../buttons/ToggleBtn";
import PhaseDropDown from "../buttons/PhaseDropDown";

const Side = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
`;
const Stl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 100px;
`;
const Str = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 50px 100px;
  display: flex;
`;

const LinkBtn = styled(ScircleBtn)`
  width: 50px;
  height: 50px;
  margin: 10px;
  background: rgb(30, 40, 30);
  font-size: 1rem;
  color: #ff577a;
`;

const ThemeBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 50px 100px;
  transform: translateX(-50%);
`;

const TopBtn = styled(ScircleBtn)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  margin: 50px 100px;
  background: rgb(30, 40, 30);
  font-size: 1.4rem;
  color: #ff577a;
`;

function Sides() {
  return (
    <Side>
      <Stl>
        <PhaseDropDown />
      </Stl>
      <Str>
        <LinkBtn>GH</LinkBtn>
        <LinkBtn>Blog</LinkBtn>
      </Str>
      <ThemeBtn>
        <ToggleBtn />
      </ThemeBtn>
      <TopBtn>▲</TopBtn>
    </Side>
  );
}

export default Sides;
