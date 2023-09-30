import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { NavLink } from "react-router-dom";

export default function NavBar({onSearch, random}) {
    return (
        <div className={style.navContainer}>

            <SearchBar onSearch={onSearch} />
            <div>
                <NavLink className={style.uiBtn} to="/about"><span>About</span></NavLink> 
                <NavLink className={style.uiBtn} to="/home"><span>Home</span></NavLink>
                <NavLink className={style.uiBtn} to="/favorites"><span>Favs</span></NavLink>
            <button className={style.uiBtn} onClick={random}><span>ADD RANDOM</span></button>
            </div> 


        </div>
    )
}