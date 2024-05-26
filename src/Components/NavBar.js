import "../Styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="nav">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        </style>
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