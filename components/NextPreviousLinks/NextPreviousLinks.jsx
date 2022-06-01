import next from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { oneOf } from "prop-types";
import { any } from "prop-types";
import { string } from "prop-types";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { API_URL, clearPageLink, getPrevPageLink } from "../../utils/api";

const LinksBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
    white-space: nowrap;

    &.disabled {
      cursor: inherit;
      opacity: 0.8;
    }
  }
`;

const Pager = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  justify-content: center;
  align-items: center;
  padding-left: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};
  padding-right: ${(props) => props.theme.sizes.itemSizeNum * 4 + "px"};


  .PageLink {
    border-radius: 100%;
    background-color: ${(props) => props.theme.extra.yellow};
    height: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
    width: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
    cursor: pointer;
  }

  @media (max-width: 600px) {
      display: none;
    }

`;

const NextPreviousLinks = ({ previous, next }) => {
  const router = useRouter();
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    if (previous) {
      setPrevPage(clearPageLink(previous));
    }
    if (next) {
      let link = clearPageLink(next);
      setNextPage(link);
      const all = [];
      let prev = getPrevPageLink(link, 1);
      while (link !== prev) {
        all.push(prev);
        link = prev;
        prev = getPrevPageLink(link, 1);
      }
      all.reverse();
      setAllPages(all);
    }
  }, [previous, next, setPrevPage, setNextPage, setAllPages]);

  const routePage = useCallback(
    (page) => {
      router
        .push(page)
        .then(() =>
          document.getElementsByClassName("ThemeContainer")[0].scrollTo(0, 0)
        );
    },
    [router]
  );

  const routePrevious = useCallback(() => {
    routePage(prevPage);
  }, [prevPage]);

  const routeNext = useCallback(() => {
    routePage(nextPage);
  }, [nextPage]);


  return (
    <LinksBar className="TopLevel">
      {prevPage && (
        <div className="ButtonLink" onClick={routePrevious}>
          Prev Page
        </div>
      )}
      {!prevPage && <div className="ButtonLink disabled">Prev Page</div>}

      <Pager>
        {allPages.map((page, index) => {
          return <Link key={"Link_" + (index + 1)} href={page} ><div className="PageLink" title={"Go to Page " + (index + 1)}></div></Link>;
        })}
      </Pager>

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
