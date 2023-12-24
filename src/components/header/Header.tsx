import styled from "styled-components";
import ToggleBtn2 from "../buttons/ToggleBtn2";
import ScircleBtn from "../buttons/CircleBtn";
import { useRecoilState } from "recoil";
import { AcurrentPosition } from "../../utils/recoilStore/atom";

const Sheader = styled.header`
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100vw;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Stitle = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Sright = styled.div`
  display: flex;
  margin: 0 10px;
  margin-right: 30px;
`;

const LinkBtn = styled(ScircleBtn)`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  background: rgb(30, 40, 30);
  font-size: 0.8rem;
  color: #ff577a;
`;

function Header() {
  const [currentPosition] = useRecoilState(AcurrentPosition);
  return (
    <Sheader>
      <ToggleBtn2 />
      <Stitle>{currentPosition}</Stitle>
      <Sright>
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
      </Sright>
    </Sheader>
  );
}

export default Header;
