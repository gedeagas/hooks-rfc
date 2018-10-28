import React from "react";
import styled, { css } from "styled-components";

const StyledText = styled.span`
  font-size: 16px;
  color: #fbf9b8;
  font-family: "Karla", sans-serif;
  ${props =>
    props.size &&
    css`
      font-size: ${props.size};
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `};
`;

const Text = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
