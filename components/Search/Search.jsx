import { useRouter } from "next/router";
import { string } from "prop-types";
import { number } from "prop-types";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import searchSymbol from "../../utils/searchSymbol";

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  grid-area: S;

  input {
    outline: none;
    background-color: ${(props) => props.theme.colors.icon};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;

    &:placeholder {
      color: transparent;
    }
  }

  input:-internal-autofill-selected {
    background-color: ${(props) => props.theme.colors.icon} !important;
    color: ${(props) => props.theme.colors.secondary} !important;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.icon}
      inset;
    color-scheme: ${(props) => props.theme.name !== "dark" ? "dark" : ""};
  }

  input[type="search"] {
    background-image: ${(props) => props.icon};
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${(props) => props.height / 2 + "px"};

    height: ${(props) => props.height + "px"};
    width: ${(props) => props.height + "px"};
    border: 1px solid transparent;
    border-radius: ${(props) => props.height + "px"};
    padding: 0 ${(props) => props.theme.sizes.borderRadius};
    transition: all 0.5s;
    &:hover {
      filter: ${(props) =>
        props.theme.name === "light"
          ? "drop-shadow(0 0 5px rgba(0, 0, 0, 0.4))"
          : "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6))"};
    }
  }

  input[type="search"]:focus {
    width: 240px;
    border-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    background-image: none;

    &:placeholder {
      color: inherit;
    }

    @media (max-width: 600px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

const Search = ({ height, color }) => {
  const router = useRouter();

  const [searchIcon, setSearchIcon] = useState("");

  useEffect(() => {
    setSearchIcon(searchSymbol(color));
  }, [setSearchIcon, color]);

  const onSearchBlur = useCallback((e) => {
    e.target.value = "";
  }, [])

  return (
    <SearchForm
      height={height}
      icon={searchIcon}
      aria-label="Search for game..."
    >
      <input type="search" name="search" placeholder="Search" onBlur={onSearchBlur} aria-label="Click for search game..."/>
    </SearchForm>
  );
};

Search.propTypes = {
  height: number.isRequired,
  color: string.isRequired,
};

export default Search;
