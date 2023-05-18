import React from "react";
import style from "./Delivery.module.css";
import Bike from "../../assets/img/IconBike.svg";
import RouteIcon from "../../assets/img/Route.svg";
import supporttIcon from "../../assets/img/SupportIcon.svg";
import IconBag from "../../assets/img/IconBag.svg";
import Items from "./module/Items";


const Delivery = (props) => {


    return (

        <div className={style.delivery}>
            <div className={style.container}>
                <h2 className={style.title}>
                    Express delivery market revolution
                </h2>
                <span className={style.subtitle}>
                Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!
            </span>
            </div>
            <div className={style.items}>
                <Items title="Become a Courier" imgOne={Bike} img={RouteIcon}
                       text={`You choose a schedule. You \n decide how much and when to \n earn. Earnings from day one`}/>
                <Items title="Help & Support" imgOne={supporttIcon}
                       text={`Door-to-door delivery \n in 90 minutes or at your \n convenience`}/>
                <Items title="Affiliate Program" imgOne={IconBag}
                       text={`Use our service and feel \n new quality of this traditional \n service!`}/>
            </div>

        </div>);
}

export default Delivery;
