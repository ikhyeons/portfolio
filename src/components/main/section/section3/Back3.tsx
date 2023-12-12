import React from "react";
import styled from "styled-components";

const Ssection = styled.section`
  position: sticky;
  top: 80dvh;
  height: 67dvh;
  margin-bottom: 0px;
  background-image: url("../background/paper.jpg");
  border-top: 5px solid rgb(30, 40, 30);
  isolation: isolate;
  box-shadow: -10px 0px 30px black;
  padding: 10px;
  font-size: 2rem;
  text-align: center;
  &:after {
    content: "";
    position: absolute;
    background: #ff577a;
    z-index: -1;
    inset: 0;
    opacity: 0.4;
  }
`;

const Spapers = styled.div`
  position: sticky;
  top: 70dvh;
  width: 100%;
`;
const Spaper = styled.div<{ $type: "fe" | "be" | "el" }>`
  position: absolute;
  padding: 20px;
  font-weight: bold;
  font-size: 2rem;
  left: 50%;
  width: 80%;
  height: 60dvh;
  color: black;
  box-shadow: -3px -3px 20px black;
  background: white;
  cursor: pointer;
  transform: rotate(${() => Math.random() * 4 - 2}deg)
    translate(
      -50%,
      ${(prop) => {
        switch (prop.$type) {
          case "fe":
            return "-40%";
          case "be":
            return "-20%";
          case "el":
            return "0";
          default:
            return "default";
        }
      }}
    );
  transition: transform 0.2s;
  &:after {
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    position: absolute;
    right: ${(prop) => {
      switch (prop.$type) {
        case "fe":
          return "10px";
        case "be":
          return "65px";
        case "el":
          return "120px";
        default:
          return "default";
      }
    }};
    top: -20px;
    width: 50px;
    height: 40px;
    background: ${(prop) => {
      switch (prop.$type) {
        case "fe":
          return "green";
        case "be":
          return "#ff544a";
        case "el":
          return "#ff44ff";
        default:
          return "default";
      }
    }};
    box-shadow: 0px -3px 2px black;
    content: "${(prop) => prop.$type}";
    color: black;
  }

  &:hover {
    transform: translate(
      -50%,
      ${(prop) => {
        switch (prop.$type) {
          case "fe":
            return "-50%";
          case "be":
            return "-30%";
          case "el":
            return "-10%";
          default:
            return "default";
        }
      }}
    );
  }
`;

function Section3() {
  return (
    <>
      <Spapers>
        <Spaper $type="fe">Front-End</Spaper>
        <Spaper $type="be">Back-End</Spaper>
        <Spaper $type="el">else</Spaper>
      </Spapers>
      <Ssection>Skills</Ssection>;
    </>
  );
}

export default Section3;
