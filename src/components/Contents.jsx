import React, { useContext } from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";

import { ThemeContext } from "../App";

const Contents = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Kritsana Ding Official</h1>
        <p>Dark Mode Workshop</p>
      </div>

      <img src={theme === "dark" ? dark : light} alt="Logo" />
    </main>
  );
};

export default Contents;
