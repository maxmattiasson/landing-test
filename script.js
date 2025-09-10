const toggleThemeBtn = document.getElementById("toggle-theme");
const root = document.documentElement;

toggleThemeBtn.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  if (root.dataset.theme === "dark") {
    toggleThemeBtn.textContent = "☀️";
  } else toggleThemeBtn.textContent = "🌑";

  localStorage.setItem("theme", root.dataset.theme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;
