import { useEffect, useState } from "react";
import "../Styles/NavBar.css";
import Menu from "./Menu";
const NavBar = () => {
    const[showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        document.querySelector(".menu").addEventListener("click", () => {
            // const menuPopup = document.querySelector(".Menu-popup");
            setShowMenu(true);
            // menuPopup.classList.remove("visible");
        });
    },[]);

    useEffect(() => {
        if(showMenu){
            document.querySelector(".menu").style.display = "none";
            document.querySelector(".logo").style.display = "none";
        }else{
            document.querySelector(".menu").style.display = "block";
            document.querySelector(".logo").style.display = "block";
        }
        if(showMenu){
            if(document.querySelector(".cut")){
                document.querySelector(".cut").addEventListener("click", () => {
                    const menuTable = document.querySelector(".menu-table");
                    const menuPopup = document.querySelector(".Menu-popup");
                    menuTable.classList.add("hidden");
                    menuPopup.classList.add("hidden");
                    setTimeout(() => {
                        document.querySelector(".Screen").style.display = "none";
                        setShowMenu(false);
                    }, 400);
                });
            }
        }
    },[showMenu]);

    return (
        <div className="nav">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        </style>
            {showMenu && <Menu />}
            <div className="logo">
                <h1>Shubh</h1>
            </div>
            <div className="menu">
            <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
            </div>
        </div>
    );
};

export default NavBar;