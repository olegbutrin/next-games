import { arrayOf } from "prop-types";
import { node } from "prop-types";
import { oneOfType } from "prop-types";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  margin-top: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};
  padding-bottom: ${(props) => props.theme.sizes.itemSizeNum * 8 + "px"};


  @media (min-width: 1200px) {
    padding-left: calc((100% - 800px) / 2);
    padding-right: calc((100% - 800px) / 2);
  }

  @media (max-width: 700px) {
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

const GameContent = ({ children }) => {
  return <Content className="TopLevel">{children}</Content>;
};

GameContent.propRtpes = {
  children: oneOfType([arrayOf(node), node]),
};

export default GameContent;
