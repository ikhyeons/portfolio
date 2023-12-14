import styled from "styled-components";

const StoggleBtn = styled.input`
  display: none;
  user-select: none;
  & + label {
    display: block;
    color: white;
    user-select: none;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    padding: 5px;
    background: rgb(60, 70, 60);
    cursor: pointer;

    &:before {
      display: block;
      width: 25px;
      height: 25px;
      background: rgb(20, 30, 20);

      content: " ";
      border-radius: 50%;
      user-select: none;
      transform: translateX(0px);
      transition: transform 0.6s, color 0.6s;
    }
  }

  &:checked + label {
    &:before {
      transform: translateX(100%);
      background: rgb(180, 180, 30);
    }
  }
`;

function ToggleBtn() {
  return (
    <>
      <StoggleBtn type="checkbox" id="toggle" />
      <label htmlFor="toggle" />
    </>
  );
}

export default ToggleBtn;
