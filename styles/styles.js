import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const themeColors = {
  red: "#AD343E",
  yellow: "#F2AF29",
  black: "#1F1F1F",
  white: "#E0E0CE",
  gray: "#474747",
};

export const sizes = {
  itemSize: "8px",
  itemSizeNum: 8,
  globalPadding: {
    "300": "24px",
    "600": "32px",
    "860": "10vw",
    "1480": "12vw",
    "1800": "14vw",
  },
  borderRadius: "4px",
  fontSize: "16px",
};

export const dark = {
  name: "dark",
  colors: {
    primary: themeColors.white,
    secondary: themeColors.black,
    background: themeColors.gray,
    icon: themeColors.yellow,
  },
  sizes: sizes,
};

export const light = {
  name: "light",
  colors: {
    primary: themeColors.black,
    secondary: themeColors.white,
    background: themeColors.gray,
    icon: themeColors.gray,
  },
  sizes: sizes,
};

export const Icon = styled.div`
  display: inline-block;
  cursor: pointer;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  &:hover {
    filter: ${(props) =>
      props.theme.name === "light"
        ? "drop-shadow(0 0 5px rgba(0, 0, 0, 0.4))"
        : "drop-shadow(0 0 5px rgba(255, 255, 255, 0.6))"};
  }
  & .ThemedIcon {
    fill: ${(props) => props.theme.colors.icon};
  }
`;

export const IconWithPopup = styled.div`
  display: inherit;
  margin: 0;
  padding: 0;
`;

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${(props) => props.theme.sizes.fontSize};
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
  }

  .ThemeContainer {
    background-color: ${(props) => props.theme.colors.secondary};
    animation: fadeIn ease 2s;

  }

  .IconContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${(props) => props.theme.sizes.itemSize};
    grid-area: I;
  }

  .TopLevel {
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 300px) {
      padding-left: ${(props) => props.theme.sizes.globalPadding["300"]};
      padding-right: ${(props) => props.theme.sizes.globalPadding["300"]};
    }

    @media (min-width: 600px) {
      padding-left: ${(props) => props.theme.sizes.globalPadding["600"]};
      padding-right: ${(props) => props.theme.sizes.globalPadding["600"]};
    }

    @media (min-width: 860px) {
      padding-left: ${(props) => props.theme.sizes.globalPadding["860"]};
      padding-right: ${(props) => props.theme.sizes.globalPadding["860"]};
    }

    @media (min-width: 1480px) {
      padding-left: ${(props) => props.theme.sizes.globalPadding["1480"]};
      padding-right: ${(props) => props.theme.sizes.globalPadding["1480"]};
    }

    @media (min-width: 1800px) {
      padding-left: ${(props) => props.theme.sizes.globalPadding["1800"]};
      padding-right: ${(props) => props.theme.sizes.globalPadding["1800"]};
    }
  }

  main {
    width: 100%;
    height: 100vh;
  }


  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

`;

export default GlobalStyle;
