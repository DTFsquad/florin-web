import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles";

const { colors, fonts } = theme;

const Link = styled.a`
  color: ${colors.brightYellow};
  background-color: transparent;
  border: 1px solid ${colors.brightYellow};
  border-radius: 3px;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  font-family: ${fonts.primary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  margin-top: 5rem;
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.brightYellowTransparent};
  }
`;

const LinkButton = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default LinkButton;