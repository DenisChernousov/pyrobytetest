import React from "react";
import style from "./Parthners.module.css";
import iconColab from "../../assets/img/IconColab.svg";

const Parthners = (props) => {
    return (
        <div className={style.inner}>
            <div className={style.centralize}></div>
            <div>
                <h2 className={style.title}>Our Parthners</h2>
            </div>
            <div className={style.btnBox}>
                <button className={style.btn}>
                    <img src={iconColab}/> Let's collaborate
                </button>
            </div>
        </div>
    )
};

export default Parthners;


