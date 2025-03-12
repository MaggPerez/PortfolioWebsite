import { useEffect, useState } from "react";
import sunIcon from "/images/sun.svg"
import moonIcon from "/images/moon.svg"

const DarkModeToggle = () => {
    const[darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() =>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            
        }
        else{

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            
        }
    }, [darkMode]);

    return(
        <button 
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md flex items-center"
            onClick={() => setDarkMode(!darkMode)}
        >
            <img 
                src={darkMode ? moonIcon : sunIcon} 
                alt={darkMode ? "Moon Icon" : "Sun Icon"} 
                className="w-6 h-6"
            />
            <span>{darkMode ? "" : ""}</span>
        </button>
    );

}

export default DarkModeToggle;