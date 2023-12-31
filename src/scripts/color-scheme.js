const darkColorScheme = matchMedia("(prefers-color-scheme: dark)");

darkColorScheme.addEventListener("change", applyColorScheme);

applyColorScheme(darkColorScheme);

/**
 * @param {{ matches: boolean }} event
 */
function applyColorScheme(event) {
  const html = document.documentElement;

  if (event.matches) {
    if (!html.classList.contains("dark")) html.classList.add("dark");
  } else {
    if (html.classList.contains("dark")) html.classList.remove("dark");
  }
}
