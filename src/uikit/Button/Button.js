import React from "react";
import styled, { css } from "styled-components";
import Matcher from "../Utils/Matcher";

const StyledButton = styled.button`
  background: #000000;
  border-radius: 10px;
  margin: 0.3em 0em;
  padding: 0.7em 1em;
  ${props =>
    props.color &&
    css`
      background: ${Matcher.create("color", [
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

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
