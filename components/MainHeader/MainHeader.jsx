import { oneOfType, arrayOf, node } from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-areas: "L S I";
  column-gap: ${(props) => props.theme.sizes.itemSize};
  row-gap: ${(props) => "calc(" + props.theme.sizes.itemSize + " * 2)"};
  align-items: center;
  padding-top: ${(props) => "calc(" + props.theme.sizes.itemSize + " * 4)"};
  padding-bottom: ${(props) => "calc(" + props.theme.sizes.itemSize + " * 2)"};
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid
    ${(props) =>
      props.theme.name === "light"
        ? props.theme.colors.primary
        : props.theme.colors.yellow};
  box-shadow: ${(props) =>
    props.theme.name === "light"
      ? "0 0 12px rgba(0, 0, 0, 0.4)"
      : "0 0 12px rgba(242, 175, 41, 0.6)"};
  width: 100%;
  z-index: 100;

  @media (max-width: 480px) {
    grid-template-columns: 1fr min-content;
    grid-template-areas: 
      "L I"
      "S S";
    }

    @media (max-width: 240px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "L"
      "I"
      "S";
    }
`;

const MainHeader = ({ children }) => {
  return <Header className="TopLevel">{children}</Header>;
};

MainHeader.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export default MainHeader;
