import { number } from "prop-types";
import React from "react";
import styled from "styled-components";

const RatingBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.sizes.itemSize};
  font-size: ${(props) => props.theme.sizes.itemSizeNum * 2.5 + "px"};

  .stars-outer {
    position: relative;
    display: inline-block;
  }

  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }

  .stars-outer::before {
    content: "★ ★ ★ ★ ★";
    font-weight: 900;
    color: white;
  }

  .stars-inner::before {
    content: "★ ★ ★ ★ ★";
    font-weight: 900;
    color: ${(props) => props.theme.extra.yellow};
  }

  .numberValue {
    font-size: ${(props) => props.theme.sizes.itemSizeNum * 2.25 + "px"};
    font-weight: 500;
  }

`;

const Rating = ({ rating }) => {
  return (
    <RatingBar>
      <div className="stars-outer">
        <div
          className="stars-inner"
          style={{ width: Math.round(rating * 20) + "%" }}
          aria-label={"Rating: " + rating}
          title={"Rating: " + rating}
        ></div>
      </div>
      <div className="numberValue">{rating}</div>
    </RatingBar>
  );
};

Rating.propTypes = {
  rating: number,
};

export default Rating;
