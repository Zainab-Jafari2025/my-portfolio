import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

function GlobalProvider({ children }) {
  // 🌙 Theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // ⭐ Favorites
  const [favorites, setFavorites] = useState([]);

  // 👤 User
  const [user] = useState({
    name: "Zainab Jafari",
    role: "Frontend Developer",
  });

  // 💾 Save theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔁 Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ⭐ Add / Remove favorites
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        toggleFavorite,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;