import React from "react";
import styled, { css } from "styled-components";
import Matcher from "../Utils/Matcher";

const StyledBox = styled.div`
  color: #fbf9b8;
  padding: 15px;
  border-radius: 10px;
  background: #ff0a00;
  display: flex;
  flex-direction: column;
  ${props =>
    props.background &&
    css`
      background: ${Matcher.create("background", [
        ["regular", "#000000"],
        ["cyan", "#00a1b0"],
        ["gray", "#999999"],
        ["red", "#f44336"],
        ["green", "#4CAF50"],
        ["blue", "#2196F3"],
        ["orange", "#FF9800"],
        ["white", "#FFFFFF"],
        ["black", "#000"]
      ])};
    `};
`;

const Box = props => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export default Box;
