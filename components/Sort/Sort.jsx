import { string } from "prop-types";
import { number } from "prop-types";
import React from "react";
import styled from "styled-components";
import Popup from "../Popup/Popup";
import { Icon, IconWithPopup } from "../../styles/styles";
import { useState } from "react";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { capFL } from "../../utils/utils";
import { object } from "prop-types";

const sortNames = ["rating", "name", "released"];

const SortIcon = ({ title }) => {
  return (
    <svg
      version="1.1"
      id="SortSVG_Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 128 128"
    >
      <title>{title}</title>
      <path
        className="ThemedIcon"
        d="M64,0C28.7,0,0,28.7,0,64s28.7,64,64,64s64-28.7,64-64S99.3,0,64,0z M67.2,74.6L53.5,91.5c-0.8,1-2,1.6-3.3,1.6
	s-2.5-0.6-3.3-1.6L33,74.6c-1.1-1.3-1.3-3.1-0.6-4.6c0.7-1.5,2.2-2.5,3.9-2.5h9.5V34.9v0h8.6l0,32.6h9.5c1.7,0,3.2,1,3.9,2.5
	c0.3,0.6,0.4,1.2,0.4,1.8C68.2,72.9,67.9,73.8,67.2,74.6z M97.3,53.8c-0.7,1.5-2.2,2.4-3.9,2.4h-9.1l0,32.6h-8.6V56.2h-9.1
	c-1.7,0-3.2-0.9-3.9-2.4c-0.7-1.5-0.5-3.3,0.5-4.5l13.4-16.9c0.8-1,2.1-1.6,3.4-1.6s2.6,0.6,3.4,1.6l13.4,16.9
	c0.6,0.8,0.9,1.7,0.9,2.7C97.7,52.5,97.6,53.2,97.3,53.8z"
      />
    </svg>
  );
};

SortIcon.propTypes = {
  title: string.isRequired,
};

const SortLink = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.sizes.itemSize};
  font-weight: 500;
  text-decoration: none;
  font-size: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  color: inherit;

  .SortButton {
    display: inline-block;
    padding: ${(props) => props.theme.sizes.itemSizeNum / 2 + "px"};
    padding-right: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    position: relative;
    cursor: pointer;

    &:after {
      display: inline-block;
      right: 4px;
      position: absolute;
    }

    &.desc {
      &:after {
        content: "▲";
      }
    }

    &.asc {
      &:after {
        content: "▼";
      }
    }
  }

  &.current {
    .direction {
      &:after {
        color: ${(props) => props.theme.extra.red};
      }
    }
  }
`;

const SortItem = ({ query, name }) => {
  return (
    <SortLink
      className={
        query.ordering && query.ordering.endsWith(name) ? "current" : ""
      }
    >
      <Link href={{ query: { ...query, ordering: "-" + name } }}>
        <div
          className={
            "SortButton asc" +
            (query.ordering && query.ordering.startsWith("-")
              ? " direction"
              : "")
          }
        >
          {capFL(name)}
        </div>
      </Link>
      <Link href={{ query: { ...query, ordering: name } }}>
        <div
          className={
            "SortButton desc" +
            (query.ordering && query.ordering.startsWith("-")
              ? ""
              : " direction")
          }
        >
          {capFL(name)}
        </div>
      </Link>
    </SortLink>
  );
};

SortItem.propTypes = {
  query: object.isRequired,
  name: string.isRequired,
};

const Sort = ({ size, theme }) => {
  const router = useRouter();
  const [query, setQuery] = useState({});

  useEffect(() => {
    setQuery({ ...router.query });
  }, [router.query, setQuery]);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuVisible(!menuVisible);
  }, [menuVisible, setMenuVisible]);

  return (
    <IconWithPopup>
      <Icon size={size} onClick={toggleMenu} aria-label={"Choose sorting"}>
        <SortIcon title="Choose sorting" />
      </Icon>
      <Popup
        isVisible={menuVisible}
        title={"Sort Games By:"}
        size={size}
        onClose={toggleMenu}
      >
        {sortNames.map((name) => {
          return <SortItem key={name} query={query} name={name} />;
        })}
      </Popup>
    </IconWithPopup>
  );
};

Sort.propTypes = {
  size: number.isRequired,
};

export default React.memo(Sort);
