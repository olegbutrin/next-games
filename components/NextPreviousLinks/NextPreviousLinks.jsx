import next from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { oneOf } from "prop-types";
import { any } from "prop-types";
import { string } from "prop-types";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { API_URL, clearPageLink } from "../../utils/api";

const LinksBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  padding-bottom: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};

  .ButtonLink {
    display: inline-block;
    font-weight: 500;
    text-decoration: none;
    font-size: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
    padding: ${(props) => props.theme.sizes.itemSize};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
    position: relative;
    cursor: pointer;
    user-select: none;

    &.disabled {
      cursor: inherit;
      opacity: 0.8;
    }
  }
`;

const NextPreviousLinks = ({ previous, next }) => {
  const router = useRouter();
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    if (previous) {
      setPrevPage(clearPageLink(previous));
    }
    if (next) {
      setNextPage(clearPageLink(next));
    }
  }, [previous, next, setPrevPage, setNextPage]);

  const routePrevious = useCallback(() => {
    router
      .push(prevPage)
      .then(() =>
        document.getElementsByClassName("ThemeContainer")[0].scrollTo(0, 0)
      );
  }, [prevPage]);

  const routeNext = useCallback(() => {
    router
      .push(nextPage)
      .then(() =>
        document.getElementsByClassName("ThemeContainer")[0].scrollTo(0, 0)
      );
  }, [nextPage]);

  return (
    <LinksBar className="TopLevel">
      {prevPage && (
        <div className="ButtonLink" onClick={routePrevious}>
          Prev Page
        </div>
      )}
      {!prevPage && <div className="ButtonLink disabled">Prev Page</div>}
      {nextPage && (
        <div className="ButtonLink" onClick={routeNext}>
          Next Page
        </div>
      )}
      {!nextPage && (
        <div className="ButtonLink disabled" disabled>
          Next Page
        </div>
      )}
    </LinksBar>
  );
};

NextPreviousLinks.propTypes = {
  pevious: any,
  next: any,
};

export default NextPreviousLinks;
