// components/ThemeSwitch.js

"use client"; // Ensure it's marked as a client-side component

import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(null); // Set theme to null initially

  // Function to apply the theme by adding/removing the 'dark' class
  const applyTheme = (currentTheme) => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  };

  useEffect(() => {
    // On mount, check for saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  // Render nothing until the theme has been set
  if (!theme) return null;

  return (
    <div className="flex justify-end">
      <label className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144 55"
              fill="none"
            >
              {/* Place your SVG content here */}
            </svg>
          </div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .theme-switch {
            --toggle-size: 30px;
            --container-width: 1.5em;
            --container-height: 1em;
            --container-radius: 2.25em;
            --container-light-bg: #3d7eae;
            --container-night-bg: #1d1f2c;
            --circle-container-diameter: 3.375em;
            --sun-moon-diameter: 0.8em;
            --sun-bg: black;
            --moon-bg: #c4c9d1;
            --spot-color: #959db1;
            --circle-container-offset: calc(
              (var(--circle-container-diameter) - var(--container-height)) / 2 *
                -1
            );
            --stars-color: #fff;
            --clouds-color: #f3fdff;
            --back-clouds-color: #aacadf;
            --transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
            --circle-transition: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
          }

          .theme-switch,
          .theme-switch *,
          .theme-switch *::before,
          .theme-switch *::after {
            box-sizing: border-box;

            font-size: var(--toggle-size);
          }

          .theme-switch__container {
            width: var(--container-width);
            height: var(--container-height);
            background-color: var(--container-light-bg);
            border-radius: var(--container-radius);
            overflow: hidden;
            cursor: pointer;
            box-shadow:
              0em -0.062em 0.062em rgba(0, 0, 0, 0.25),
              0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
            transition: var(--transition);
            position: relative;
          }

          .theme-switch__container::before {
            content: "";
            position: absolute;
            z-index: 1;
            inset: 0;
            box-shadow:
              0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset,
              0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
            border-radius: var(--container-radius);
          }

          .theme-switch__checkbox {
            display: none;
          }

          .theme-switch__circle-container {
            width: var(--circle-container-diameter);
            height: var(--circle-container-diameter);
            background-color: rgba(255, 255, 255, 0.1);
            position: absolute;
            left: var(--circle-container-offset);
            top: var(--circle-container-offset);
            border-radius: var(--container-radius);
            box-shadow:
              inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
              inset 0 0 0 3.375em rgba(255, 255, 255, 0.1),
              0 0 0 0.625em rgba(255, 255, 255, 0.1),
              0 0 0 1.25em rgba(255, 255, 255, 0.1);
            display: flex;
            transition: var(--circle-transition);
            pointer-events: none;
          }

          .theme-switch__sun-moon-container {
            pointer-events: auto;
            position: relative;
            z-index: 2;
            width: var(--sun-moon-diameter);
            height: var(--sun-moon-diameter);
            margin: auto;
            border-radius: var(--container-radius);
            background-color: var(--sun-bg);
            box-shadow:
              0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
              0em -0.062em 0.062em 0em #a1872a inset;
            filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25))
              drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
            overflow: hidden;
            transition: var(--transition);
          }

          .theme-switch__moon {
            transform: translateX(100%);
            width: 100%;
            height: 100%;
            background-color: var(--moon-bg);
            border-radius: inherit;
            box-shadow:
              0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset,
              0em -0.062em 0.062em 0em #969696 inset;
            transition: var(--transition);
            position: relative;
          }

          .theme-switch__spot {
            position: absolute;
            top: 0.75em;
            left: 0.312em;
            width: 0.75em;
            height: 0.75em;
            border-radius: var(--container-radius);
            background-color: var(--spot-color);
            box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
          }

          .theme-switch__spot:nth-of-type(2) {
            width: 0.375em;
            height: 0.375em;
            top: 0.937em;
            left: 1.375em;
          }

          .theme-switch__spot:nth-of-type(3) {
            width: 0.25em;
            height: 0.25em;
            top: 0.312em;
            left: 0.812em;
          }

          .theme-switch__clouds {
            width: 1.25em;
            height: 1.25em;
            background-color: var(--clouds-color);
            border-radius: var(--container-radius);
            position: absolute;
            bottom: -0.625em;
            left: 0.312em;
            box-shadow:
              0.937em 0.312em var(--clouds-color),
              -0.312em -0.312em var(--back-clouds-color),
              1.437em 0.375em var(--clouds-color),
              0.5em -0.125em var(--back-clouds-color),
              2.187em 0 var(--clouds-color),
              1.25em -0.062em var(--back-clouds-color),
              2.937em 0.312em var(--clouds-color),
              2em -0.312em var(--back-clouds-color),
              3.625em -0.062em var(--clouds-color),
              2.625em 0em var(--back-clouds-color),
              4.5em -0.312em var(--clouds-color),
              3.375em -0.437em var(--back-clouds-color),
              4.625em -1.75em 0 0.437em var(--clouds-color),
              4em -0.625em var(--back-clouds-color),
              4.125em -2.125em 0 0.437em var(--back-clouds-color);
            transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
          }

          .theme-switch__stars-container {
            position: absolute;
            color: var(--stars-color);
            top: -100%;
            left: 0.312em;
            width: 2.75em;
            height: auto;
            transition: var(--transition);
          }

          /* Actions */

          .theme-switch__checkbox:checked + .theme-switch__container {
            background-color: var(--container-night-bg);
          }

          .theme-switch__checkbox:checked
            + .theme-switch__container
            .theme-switch__circle-container {
            left: calc(
              100% - var(--circle-container-offset) - var(
                  --circle-container-diameter
                )
            );
          }

          .theme-switch__checkbox:checked
            + .theme-switch__container
            .theme-switch__circle-container:hover {
            left: calc(
              100% - var(--circle-container-offset) - var(
                  --circle-container-diameter
                ) - 0.187em
            );
          }

          .theme-switch__circle-container:hover {
            left: calc(var(--circle-container-offset) + 0.187em);
          }

          .theme-switch__checkbox:checked
            + .theme-switch__container
            .theme-switch__moon {
            transform: translate(0);
          }

          .theme-switch__checkbox:checked
            + .theme-switch__container
            .theme-switch__clouds {
            bottom: -4.062em;
          }

          .theme-switch__checkbox:checked
            + .theme-switch__container
            .theme-switch__stars-container {
            top: 50%;
            transform: translateY(-50%);
          }
        `}</style>
      </label>
    </div>
  );
};

export default ThemeSwitch;
