import React from "react";
import style from "./Items.module.css";

const Delivery = (props) => {
    return (


        <div className={style.item}>
            <h3 className={style.title}>
                {props.title}
            </h3>
            <div className={style.imgBox}>
                <div className={style.imgOne}>
                    <img src={props.imgOne}/>
                </div>
                <div className={style.img}>
                    <img src={props.img}/>
                </div>
            </div>
            <div className={style.textBox}>
            <span className={style.text}>
                 {props.text}
            </span>
            </div>
        </div>

    );
}

export default Delivery;
