import styled from "styled-components";
import ScircleBtn from "../buttons/CircleBtn";
import ToggleBtn from "../buttons/ToggleBtn";

const SLink = styled.div`
  margin-bottom: 30px;
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

const TopBtn = styled(ScircleBtn)`
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 60px;
  height: 60px;
  margin: 50px 70px;
  background: rgb(30, 40, 30);
  font-size: 1.4rem;
  color: #ff577a;
`;

const Phase = styled.div`
  display: flex;
  justify-content: space-between;

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

const StoggleWrap = styled.div`
  margin-top: 50px;
`;
function Sides() {
  return (
    <>
      <Phase>
        <StoggleWrap>
          <ToggleBtn />
        </StoggleWrap>
        <span>ABOUT ME</span>
        <SLink>
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
        </SLink>
      </Phase>

      <TopBtn
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        ▲
      </TopBtn>
    </>
  );
}

export default Sides;
