import Image from "next/image";
import { object } from "prop-types";
import { arrayOf } from "prop-types";
import React from "react";
import styled from "styled-components";

const PureSlider = styled.div`
  display: block;
  height: 32vh;
  width: 100%;
  overflow: hidden;

  .slides {
    display: flex;
    flex-direction: row;
    width: ${(props) => props.count * 100 + "%"};
    height: 100%;
    animation: ${(props) =>
      "slide " + (props.count * 2 + "s") + " ease-in infinite"};
  }

  .slide {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100%;
  }

  @keyframes slide {
    0% {
      margin-left: 0;
    }
    21% {
      margin-left: 0;
    }
    25% {
      margin-left: -100%;
    }
    46% {
      margin-left: -100%;
    }
    50% {
      margin-left: -200%;
    }
    71% {
      margin-left: -200%;
    }
    75% {
      margin-left: -300%;
    }
    95% {
      margin-left: -300%;
    }
    100% {
      margin-left: 0;
    }
  }
`;

const Slider = ({ slides }) => {
  return (
    <PureSlider count={slides.length}>
      <div className="slides">
        {slides.map((slide, index) => {
          return (
            <div key={"Slide_" + index} className="slide">
              <Image
                src={slide.image}
                layout={"fill"}
                objectFit={"cover"}
              ></Image>
            </div>
          );
        })}
      </div>
    </PureSlider>
  );
};

Slider.propTypes = {
  slides: arrayOf(object),
};

export default Slider;
