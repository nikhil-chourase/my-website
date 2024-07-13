import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/nikhil-chourase?tab=repositories"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className="footer">Made with ❤ By nikk_hse</h3>
        </a>
      </div>
    </>
  );
};


