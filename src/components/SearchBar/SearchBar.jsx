import { useState } from "react";
import style from "./searchBar.module.css";

export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState("")

   function changeHandler(evento){
      evento.preventDefault();
      let input = evento.target.value 
      setId(input)
   }


   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type='search' value={id} onChange={changeHandler}/>
         <div className={style.searchIconContainer}>
         <button className={style.searchIcon} onClick={()=>onSearch(id)}></button>
         </div>
      </div>
   );
}
