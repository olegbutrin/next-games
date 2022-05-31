import { object } from "prop-types";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Rating from "../Rating/Rating";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  height: ${(props) => props.theme.sizes.cardSize};
  border: 1px solid
    ${(props) =>
      props.theme.name === "light"
        ? props.theme.colors.primary
        : props.theme.extra.yellow};
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
  transform: scale(1);

  box-shadow: ${(props) =>
    props.theme.name === "light"
      ? "0 0 12px rgba(0, 0, 0, 0.4)"
      : "0 0 12px rgba(242, 175, 41, 0.4)"};

  & .TextBackground {
    display: grid;
    background-color: rgba(0, 0, 0, 0.4);
    color: rgb(255, 255, 255);
    padding: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.075);
  }
`;

const DataInfo = styled.div`
  font-size: ${(props) => props.theme.sizes.itemSizeNum * 2.5 + "px"};
  font-weight: 500;
`;

const GameCard = ({ game }) => {
  return (
    <Card>
      {game.background_image && (
        <div className="bgWrap">
          <Image
            alt={`${game.name} Image`}
            src={game.background_image}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
      <Link href={`/games/${encodeURIComponent(game.slug)}`}>
        <div className="TextBackground">
          <h3>{game.name}</h3>
          <Rating rating={game.rating} />
          <DataInfo>{game.released}</DataInfo>
        </div>
      </Link>
    </Card>
  );
};

GameCard.propTypes = {
  game: object,
};

export default GameCard;
