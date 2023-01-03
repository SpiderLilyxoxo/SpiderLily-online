import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches
const defaultTheme = isDarkTheme ? "dark" : "light"

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("app-theme") || defaultTheme)

    useLayoutEffect(() => {
        const moonBtn = document.querySelector(".moon");
        const sunBtn = document.querySelector(".sun");
    
        if (theme === "dark") {
            sunBtn.style.display = "flex"
        } else {
            moonBtn.style.display = "flex"
        }


        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("app-theme", theme)
    }, [theme])

    return {theme, setTheme}
}