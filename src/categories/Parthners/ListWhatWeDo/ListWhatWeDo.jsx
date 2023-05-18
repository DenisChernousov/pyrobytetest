import React from "react";
import style from "./ListWhatWeDo.module.css";
import {Link} from "react-router-dom";


const ListWhatWeDo = (props) => {
    return (


        <div className={style.item}>
            <div className={style.imgBox}>
                <div className={style.imgOne}>
                    <img src={props.imgOne}/>
                </div>
            </div>
            <h3 className={style.title}>
                {props.title}
            </h3>

            <div className={style.textBox}>
            <span className={style.text}>
                 {props.text}
            </span>
                <img src={props.arrow}/>
            </div>
        </div>


    )
};

export default ListWhatWeDo;


