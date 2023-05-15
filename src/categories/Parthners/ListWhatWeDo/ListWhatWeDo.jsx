import React from "react";
import style from "./List.module.css";
import {Link} from "react-router-dom";


const List = (props) => {
    return (


        <div className={style.item}>
            <Link to="#"> <img className={style.img} src={props.img}/> </Link>
        </div>


    )
};

export default List;


