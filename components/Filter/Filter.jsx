import { string } from "prop-types";
import { number } from "prop-types";
import React from "react";
import { Icon } from "../../styles/styles";

const PadIcon = ({ title }) => {
  return (
    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 75 75">
      <title>{title}</title>
      <g className="ThemedIcon">
        <path d="M50.2,33.7c0-1.2-1-2.2-2.2-2.2s-2.2,1-2.2,2.2s1,2.2,2.2,2.2S50.2,34.9,50.2,33.7z" />
        <path d="M51.6,32.3c1.2,0,2.2-1,2.2-2.2c0-1.2-1-2.2-2.2-2.2s-2.2,1-2.2,2.2C49.4,31.3,50.4,32.3,51.6,32.3z" />
        <polygon
          points="23.7,29.5 20.4,29.5 20.4,32.5 17.3,32.5 17.3,35.8 20.4,35.8 20.4,38.9 23.7,38.9 23.7,35.8 26.7,35.8 26.7,32.5 
		23.7,32.5 	"
        />
        <path
          d="M37.5,0C16.8,0,0,16.8,0,37.5C0,58.2,16.8,75,37.5,75C58.2,75,75,58.2,75,37.5C75,16.8,58.2,0,37.5,0z M56.8,54h-3.3
		l-7.2-11.4h-7.9h-1.9h-7.9L21.6,54h-3.3c-2.6,0-4.7-2.1-4.7-4.7l1.1-16.6c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2
		c0-5.6,4.5-10.1,10.1-10.1c2.3,0,3.9,0.8,5.6,2.1c2.2-0.6,3.3-1.2,6.2-1.3h1.9c3,0.2,4.1,0.7,6.2,1.3c1.7-1.3,3.3-2.1,5.6-2.1
		c5.6,0,10.1,4.5,10.1,10.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1l1.1,16.6C61.5,51.9,59.4,54,56.8,54z"
        />
        <path d="M55.1,31.5c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S56.4,31.5,55.1,31.5z" />
        <path d="M51.6,35c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S52.8,35,51.6,35z" />
      </g>
    </svg>
  );
};

PadIcon.propTypes = {
  title: string.isRequired,
};

const Filter = ({ size }) => {
  return (
    <Icon size={size} onClick={() => {}} aria-label={"Filter by Platform"}>
      <PadIcon title="Filter by Platform" />
    </Icon>
  );
};

Filter.propTypes = {
  size: number.isRequired,
};

export default React.memo(Filter);
