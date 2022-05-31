import { arrayOf } from "prop-types";
import { node } from "prop-types";
import { oneOfType } from "prop-types";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.theme.sizes.cardSize}, 1fr)
  );
  gap: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};
  margin-top: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};
  padding-bottom: ${(props) => props.theme.sizes.itemSizeNum * 8 + "px"};

  @media (max-width: 700px) {
    grid-template-columns: ${(props) => props.theme.sizes.cardSize}
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    padding-top: ${(props) => props.theme.sizes.itemSizeNum * 16 + "px"};
  }

  @media (max-width: 380px) {
    grid-template-columns: auto;
  }

`;

const MainContent = ({ children }) => {
  return <Content className="TopLevel">{children}</Content>;
};

MainContent.propRtpes = {
  children: oneOfType([arrayOf(node), node]),
};

export default MainContent;
