import { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMoon, LuSun } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";

const FloatingDock = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const stored = localStorage.getItem("theme");

    if (stored) {
      return stored === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">

      {/* Main Dock */}
      <div
        className="
          flex items-center gap-4
          px-4 py-2.5
          bg-white/90 dark:bg-zinc-900/90
          backdrop-blur-md
          border border-zinc-300/50 dark:border-zinc-700/50
          rounded-full
          shadow-lg
          text-zinc-700 dark:text-zinc-400
          transition-colors
        "
      >

        {/* Home */}
        <a
          href="/"
          aria-label="Home"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <GoHome className="w-4 h-4" />
        </a>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-zinc-300 dark:bg-zinc-600 mx-1" />

        {/* Blog */}
        <a
          href="/blog"
          aria-label="Blog"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <FiEdit3 className="w-4 h-4" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SanjeevPrasad10"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <FaGithub className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanjeev-prasad-69bb12315"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <FaLinkedin className="w-4 h-4" />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode Profile"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <SiLeetcode className="w-4 h-4" />
        </a>
      </div>

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="
          p-2.5
          bg-white/90 dark:bg-zinc-900/90
          backdrop-blur-md
          border border-zinc-300/50 dark:border-zinc-700/50
          rounded-full
          shadow-lg
          text-zinc-700 dark:text-zinc-400
          hover:text-black dark:hover:text-white
          transition-all duration-200
          cursor-pointer
        "
      >
        {isDarkMode ? (
          <LuSun className="w-5 h-5" />
        ) : (
          <LuMoon className="w-5 h-5" />
        )}
      </button>

    </div>
  );
};

export default FloatingDock;