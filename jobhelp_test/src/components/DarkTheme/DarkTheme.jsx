import React, { useState } from "react";
import "./Darktheme.css";



  export default function DarkTheme() { 
    const [theme, setTheme] = useState("light"); 
    const toggleTheme = () => { if (theme === "light") { setTheme("dark"); } 
    else { setTheme("light"); } };
    return ( 
      <div className={`App ${theme}`}> 
    <button className="theme" onClick={toggleTheme}>&#9899;</button> </div> 
  ); 
}

