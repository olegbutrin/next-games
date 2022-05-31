import { bool } from "prop-types";
import { oneOfType } from "prop-types";
import { node } from "prop-types";
import { number } from "prop-types";
import { func } from "prop-types";
import { arrayOf } from "prop-types";
import { string } from "prop-types";
import React from "react";
import { useCallback } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  height: 100%;
  width: 0px;
  position: relative;
`;

const InvisiblePopup = styled.div`
  display: none;
`;

const PopupBackground = styled.div`
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const PopupContents = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.sizes.itemSize};
  padding: ${(props) => props.theme.sizes.itemSize};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.icon};
  position: absolute;
  top: ${(props) => props.size + props.theme.sizes.itemSizeNum + "px"};
  right: 0px;

  & h4 {
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: small;
    text-transform: uppercase;
    user-select: none;
  }
`;

const Popup = ({ isVisible, title, size, onClose, children }) => {
  const onBackgroundClose = useCallback(
    (e) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  const onContentsClose = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <PopupContainer hidden={!isVisible}>
      <PopupBackground onClick={onBackgroundClose} />
      <PopupContents size={size} onClick={onContentsClose}>
        <h4>{title}</h4>
      </PopupContents>
    </PopupContainer>
  );
};

Popup.propTypes = {
  isVisible: bool.isRequired,
  title: string.isRequired,
  size: number.isRequired,
  onClose: func,
  children: oneOfType([arrayOf(node), node]),
};

export default React.memo(Popup);
