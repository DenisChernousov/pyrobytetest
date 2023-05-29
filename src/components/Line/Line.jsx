import React from "react";
import style from "./Line.module.css";
import mid from "../../assets/img/mid.svg";

const Line = (props) => {
    return (
        <div className={style.inner}>
            <div className={style.line}></div>
            <div className={style.middle}>
                <img className={style.midImg} src={mid}/>
            </div>
            <div className={style.line}></div>
        </div>
    );
}
export default Line;