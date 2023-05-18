import React, {Component} from "react";
import style from "./Parthners.module.css";
import iconColab from "../../assets/img/IconColab.svg";
import List from "./List/List";
import Alva from "../../assets/img/AlvaColor.svg";
import tendo from "../../assets/img/tendo.svg";
import fagor from "../../assets/img/fagor.svg";
import radioSh from "../../assets/img/radioshack.svg";
import guitarCenter from "../../assets/img/GuitarCenter.svg";
import bgMask from "../../assets/img/bgMask.png";
import {Link} from "react-router-dom";
import ListWhatWeDo from "./ListWhatWeDo/ListWhatWeDo";
import Bike from "../../assets/img/IconBike.svg";
import RouteIcon from "../../assets/img/Route.svg";
import iconCalc from "../../assets/img/iconCalc.svg";
import iconTouch from "../../assets/img/iconTouch.svg";
import iconPayment from "../../assets/img/iconPayment.svg";
import Arrow from "../../assets/img/Arrow.svg";
import SimpleSlider from "./SimpleSlider";
import PaymentSlider from "./PaymentSlider";


const Parthners = (props) => {




    return (
        <div className={style.inner}>
            <div className={style.bgMask}>
                <img src={bgMask}/>
            </div>

            <div className={style.titleBox}>

                <div className={style.centralize}></div>
                <div className={style.titleBox1}>
                    <h2 className={style.title}>Our Parthners</h2>
                </div>
                <div className={style.btnBox}>
                    <button className={style.btn}>
                        <img src={iconColab}/> Let's collaborate
                    </button>
                </div>
            </div>


            <SimpleSlider/>
            <div className={style.btnBoxAdaptive}>
                <button className={style.btn}>
                    <img src={iconColab}/> Let's collaborate
                </button>
            </div>

            <div className={style.whatWeDo}>
                <div>
                    <h2 className={style.title}>What we do</h2>

                </div>
                <div className={style.subtitle}>
                    <span className={style.TextSubtitle}>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</span>
                </div>
                <div className={style.itemsWhatWeDo}>

                    <ListWhatWeDo title={ <Link className={style.calc} to="#">Online calculation </Link> } imgOne={iconCalc}
                                  text={`Instant calculation of the cost in the order form, the price is updated in the process of filling out the form`}/>
                    <ListWhatWeDo title="Minimum paperwork" imgOne={iconTouch}
                                  text={`You can place an order for courier or freight delivery without registration and contract.`}/>

                    <ListWhatWeDo title="Convenient payment" imgOne={iconPayment}
                                  text={`You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available.`}
                                  arrow={Arrow}/>

                </div>
                <div className={style.WhatWeDoBtn}>
                    <div className={style.GetStartedBtnInner}>
                        <button className={style.GetStartedBtn}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.paymentMethods}>
                <h2 className={style.title}>Payment methods</h2>
                <div className={style.sliderBox}>

                    <PaymentSlider/>

                </div>
            </div>
        </div>
    )
};

export default Parthners;


