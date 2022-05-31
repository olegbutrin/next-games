import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Logo from "../../components/Logo/Logo";
import MainHeader from "../../components/MainHeader/MainHeader";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import ThemeContainer from "../../components/ThemeContainer/ThemeContainer";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { loadTheme, saveTheme } from "../../utils/themeSwitcher";
import GlobalStyle, { GlobalThemes, dark, light, sizes } from "../../styles/styles";
import Filter from "../../components/Filter/Filter";
import { useRouter } from "next/router";
import MainContent from "../../components/MainContent/MainContent";
import GameCard from "../../components/GameCard/GameCard";
import { rawToSingleGameInfo } from "../../utils/utils";

const Game = ({ game }) => {
  const [theme, setTheme] = useState(true);
  const swapTheme = useCallback(() => {
    saveTheme(GlobalThemes[!theme].name);
    setTheme(!theme);
  }, [theme, setTheme, GlobalThemes]);

  useEffect(() => {
    const loadedTheme = loadTheme();
    if (loadedTheme == GlobalThemes[true].name) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [setTheme, GlobalThemes]);

  console.log(game)

  return (
    <ThemeProvider theme={GlobalThemes[theme]}>
      <GlobalStyle />
      <Head>
        <title>{["Next Game", game.name].join(" - ")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="ThemeContainer">
        <main>
          <MainHeader>
            <Logo height={32} />
            <Search height={22} color={GlobalThemes[theme].colors.secondary} />
            <div className="IconContainer">
              <Sort size={20} />
              <Filter size={20} />
              <ThemeSwitcher
                size={24}
                inactive={GlobalThemes[!theme].name}
                onClick={swapTheme}
              />
            </div>
          </MainHeader>
          <MainContent>{game.name}</MainContent>
        </main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
};

export default Game;

export async function getServerSideProps(context) {
  const API_URL = "https://api.rawg.io/api/games";
  const PAGE_SIZE = 40;

  // console.log(context.query);
  const data = await (
    await fetch(
      `https://api.rawg.io/api/games/${context.query.slug}?key=0fd7438156a34f4789ffd3ccc1ffb799`
    )
  )?.json();
  const game = rawToSingleGameInfo(data);
  return {
    props: {
      game,
    },
  };
}
