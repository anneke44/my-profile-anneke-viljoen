import React from "react";
import { DarkMode } from "../hooks/DarkMode";
import "./DarkModeToggle.css";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = DarkMode();

  return (
    <div className="DarkModeToggle">
      <button onClick={() => setIsDark(!isDark)} className="toggle-button">
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
