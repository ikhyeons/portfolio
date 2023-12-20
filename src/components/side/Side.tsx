import styled from "styled-components";
import ScircleBtn from "../buttons/CircleBtn";
import ToggleBtn from "../buttons/ToggleBtn";
import PhaseDropDown from "../buttons/PhaseDropDown";

const Stl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 50px 60px;
  z-index: 3;
`;
const Str = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  margin: 50px 30px;
  display: flex;
  z-index: 3;
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
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 50px 80px;
  transform: translateX(-50%);
`;

const TopBtn = styled(ScircleBtn)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  margin: 50px 70px;
  background: rgb(30, 40, 30);
  font-size: 1.4rem;
  color: #ff577a;
`;

const Phase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 9vw;
  height: 100dvh;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  border-left: 2px solid #ff577a;
  font-size: 3vw;
  line-height: 10px;
`;

function Sides() {
  return (
    <>
      <Phase>ABOUT ME</Phase>
      <Stl>
        <PhaseDropDown />
      </Stl>
      <Str>
        <LinkBtn
          onClick={() => {
            window.open("https://github.com/ikhyeons");
          }}
        >
          GH
        </LinkBtn>
        <LinkBtn
          onClick={() => {
            window.open("https://blog.ikhyeons.net/resume");
          }}
        >
          Blog
        </LinkBtn>
      </Str>
      <ThemeBtn>
        <ToggleBtn />
      </ThemeBtn>
      <TopBtn>▲</TopBtn>
    </>
  );
}

export default Sides;
