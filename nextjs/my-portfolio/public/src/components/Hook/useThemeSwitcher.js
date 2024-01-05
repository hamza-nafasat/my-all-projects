import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
	const preferDarkQuery = "(prefers-color-scheme: dark)";
	const [mode, setMode] = useState("");
	// SET CLASS DARK OR LIGHT FOR HTML FUNCTION
	// =========================================
	const applyTheme = (selectedMode) => {
		if (selectedMode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};
	// SET LOCAL SORAGE VALUE ACORDING TO THEME
	// ========================================
	const setTheme = (selectedMode) => {
		window.localStorage.setItem("theme", selectedMode);
		setMode(selectedMode);
		applyTheme(selectedMode);
	};
	// CHANGING THEME WITH USE REF
	// ===========================
	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery);
		const userPreference = window.localStorage.getItem("theme");
		const handleChange = () => {
			const check = userPreference || (mediaQuery.matches ? "dark" : "light");
			setMode(check);
			applyTheme(check);
		};
		handleChange();
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);
	return [mode, setTheme];
};
export default useThemeSwitcher;
