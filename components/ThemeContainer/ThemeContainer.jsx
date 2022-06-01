import { oneOfType, arrayOf, string, node } from "prop-types";
import { themeContainerClass } from "../../utils/themeSwitcher";

const ThemeContainer = ({ theme, children }) => {
  return (
    <div className={themeContainerClass} data-theme={theme}>
      {children}
    </div>
  );
};

ThemeContainer.propTypes = {
  theme: string.isRequired,
  children: oneOfType([arrayOf(node), node]),
};

export default ThemeContainer;
