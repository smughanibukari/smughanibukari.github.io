'use client'

import React, { useState, useEffect } from "react";

const AnimatedButton = ({
  text = "Click Me",
  onClick,
  style = {},
  padding = "10px 36px",
  fontSize = "14px",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light");

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    };

    checkTheme(); // Initial check

    // Observe class changes on the <html> and <body> elements
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Define colors based on the theme
  const isDark = theme === "dark";

  const textColor = isDark ? "#EEEEEE" : "#111111"; // Light text on dark, dark text on light
  const hoverTextColor = isDark ? "#fff" : "#EEEEEE"; // Opposite for hover
  const circleColor = "#F77400"; // Your specified color
  const backgroundColor = "inherit"; // Adjust if needed

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: padding,
    border: "4px solid transparent",
    // fontSize: fontSize,
    backgroundColor: backgroundColor,
    borderRadius: isHovered ? "12px" : "100px",
    fontWeight: 400,
    color: isHovered ? hoverTextColor : textColor,
    boxShadow: isHovered
      ? "0 0 0 12px transparent"
      : isActive
        ? `0 0 0 4px ${circleColor}`
        : `0 0 0 2px ${circleColor}`,
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    transform: isActive ? "scale(0.95)" : "scale(1)",
    ...style,
  };

  const svgCommonStyle = {
    position: "absolute",
    width: "24px",
    fill: isHovered ? hoverTextColor : textColor,
    zIndex: 9,
    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  const arr1Style = {
    ...svgCommonStyle,
    right: isHovered ? "-25%" : "16px",
  };

  const arr2Style = {
    ...svgCommonStyle,
    left: isHovered ? "16px" : "-25%",
  };

  const circleStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isHovered ? "220px" : "20px",
    height: isHovered ? "220px" : "20px",
    backgroundColor: circleColor,
    borderRadius: "50%",
    opacity: isHovered ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  const textStyle = {
    position: "relative",
    zIndex: 1,
    transform: isHovered ? "translateX(12px)" : "translateX(-12px)",
    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={onClick}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        style={arr2Style}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span style={textStyle}>{text}</span>
      <span style={circleStyle}></span>
      <svg
        viewBox="0 0 24 24"
        style={arr1Style}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default AnimatedButton;
