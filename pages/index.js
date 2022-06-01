import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Logo from "../components/Logo/Logo";
import MainHeader from "../components/MainHeader/MainHeader";
import Search from "../components/Search/Search";
import Sort from "../components/Sort/Sort";
import ThemeContainer from "../components/ThemeContainer/ThemeContainer";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { loadTheme, saveTheme } from "../utils/themeSwitcher";
import { rawToGamesInfo } from "../utils/utils";
import GlobalStyle, {
  GlobalThemes,
  dark,
  light,
  sizes,
} from "../styles/styles";
import Filter from "../components/Filter/Filter";
import { useRouter } from "next/router";
import MainContent from "../components/MainContent/MainContent";
import GameCard from "../components/GameCard/GameCard";
import { API_URL, PAGE_SIZE } from "../utils/api";
import NextPreviousLinks from "../components/NextPreviousLinks/NextPreviousLinks";

export default function Home({ gamesInfo }) {
  const [theme, setTheme] = useState(true);
  const swapTheme = useCallback(() => {
    saveTheme(GlobalThemes[!theme].name);
    setTheme(!theme);
  }, [theme, setTheme]);

  useEffect(() => {
    const loadedTheme = loadTheme();
    if (loadedTheme == GlobalThemes[true].name) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [setTheme]);

  return (
    <ThemeProvider theme={GlobalThemes[theme]}>
      <GlobalStyle />
      <Head>
        <title>Next Game</title>
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
          <MainContent>
            {gamesInfo.results.map((game) => {
              return <GameCard key={game.slug} game={game} />;
            })}
          </MainContent>
          <NextPreviousLinks
            previous={gamesInfo.previous}
            next={gamesInfo.next}
          />
        </main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const fullQuery = {
    ...context.query,
    page_size: PAGE_SIZE,
    key: process.env.apiKey,
  };
  const queryParams = new URLSearchParams(fullQuery);
  queryParams.append("search_precise", true);

  const url = [API_URL, queryParams.toString()].join("?");
  // console.log(url);

  const data = await (await fetch(url))?.json();
  const gamesInfo = rawToGamesInfo(data);
  return {
    props: {
      gamesInfo,
    },
  };
}
