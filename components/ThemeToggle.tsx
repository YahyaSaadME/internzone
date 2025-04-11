'use client';

import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <Button
      color="gray"
      pill
      size="sm"
      onClick={toggleDarkMode}
      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
    >
      {isDarkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </Button>
  );
}
