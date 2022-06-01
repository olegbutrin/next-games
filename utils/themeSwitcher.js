const label = "nextgames_theme";

export const themeContainerClass = "ThemeContainer";
export const themeSwitcherClass = "ThemeSwitcher";

export const loadTheme = () => {
  return localStorage.getItem(label) || "dark";
}

export const saveTheme = (theme) => {
  localStorage.setItem(label, theme);
}