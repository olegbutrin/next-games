import React from "react";
import styled from "styled-components";
import { func } from "prop-types";
import { oneOf } from "prop-types";
import { number } from "prop-types";
import { string } from "prop-types";
import { Icon } from "../../styles/styles";
import { themeContainerClass } from "../../utils/themeSwitcher";

const SwitcherIcon = ({ title }) => {
  return (
    <svg
      version="1.1"
      id="THEME_SVG_"
      x="0px"
      y="0px"
      viewBox="0 0 457.3 457.3"
    >
      <title>{title}</title>
      <g className="ThemedIcon">
        <path
          id="XMLID_922_"
          d="M228.7,112.7c-63.9,0-116,52-116,116s52,116,116,116s116-52,116-116C344.6,164.7,292.6,112.7,228.7,112.7z
		"
        />
        <path
          id="XMLID_1397_"
          d="M401.4,228.7l42.5-57.1c2.9-3.9,3.7-9,2.2-13.6c-1.5-4.6-5.2-8.2-9.8-9.7l-67.9-21.2l0.8-71.1
		c0.1-4.9-2.2-9.4-6.2-12.3c-3.9-2.9-9-3.6-13.6-2.1L282,64.3l-41.2-58c-2.8-4-7.4-6.3-12.2-6.3s-9.4,2.4-12.2,6.3l-41.2,58
		l-67.4-22.8c-4.6-1.6-9.7-0.8-13.6,2.1c-3.9,2.9-6.2,7.4-6.2,12.3l0.8,71.1L21,148.3c-4.6,1.4-8.3,5.1-9.8,9.7
		c-1.5,4.6-0.7,9.7,2.2,13.6l42.5,57.1l-42.5,57.1c-2.9,3.9-3.7,9-2.2,13.6s5.2,8.2,9.8,9.7l67.9,21.2l-0.8,71.1
		c-0.1,4.9,2.2,9.4,6.2,12.3c3.9,2.9,9,3.6,13.6,2.1l67.4-22.8l41.2,58c2.8,4,7.4,6.3,12.2,6.3s9.4-2.4,12.2-6.3l41.2-58l67.4,22.8
		c4.6,1.6,9.7,0.8,13.6-2.1c3.9-2.9,6.2-7.4,6.2-12.3l-0.8-71.1l67.9-21.2c4.6-1.5,8.3-5.1,9.8-9.7c1.5-4.6,0.7-9.7-2.2-13.6
		L401.4,228.7z M228.7,374.6c-80.5,0-146-65.5-146-146s65.5-146,146-146s146,65.5,146,146S309.1,374.6,228.7,374.6z"
        />
      </g>
    </svg>
  );
};

SwitcherIcon.propTypes = {
  title: string.isRequired,
};

const ThemeSwitcher = ({ size, inactive, onClick }) => {
  const themeSwitchCallback = React.useCallback(() => {
    const themeContainers =
      document.getElementsByClassName(themeContainerClass);
    if (themeContainers.length > 0) {
      themeContainers[0].style.animation = "none";
      themeContainers[0].offsetHeight;
      themeContainers[0].style.animation = null;
    }
    onClick();
  }, [onClick]);

  return (
    <Icon
      size={size}
      onClick={themeSwitchCallback}
      aria-label={`Switch to ${inactive} mode`}
    >
      <SwitcherIcon title={`Switch to ${inactive} mode`} />
    </Icon>
  );
};

ThemeSwitcher.propTypes = {
  size: number.isRequired,
  inactive: oneOf(["dark", "light"]).isRequired,
  onClick: func.isRequired,
};

export default React.memo(ThemeSwitcher);
