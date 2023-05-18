import React from "react";
import style from "./Footer.module.css";
import {Link} from "react-router-dom";
import FooterPin from "../../assets/img/PinFooter.svg";
import f from "../../assets/img/fb.svg";
import vk from "../../assets/img/vk.svg";
import youtube from "../../assets/img/youtube.svg";
import insta from "../../assets/img/insta.svg";
import logoPyro from "../../assets/img/logoPyro.svg";
import shield from "../../assets/img/shield.svg";
import twoPin from "../../assets/img/twoPin.svg";

const Footer = (props) => {
    return (

        <div className={style.footer}>
            <div className={style.footerInner}>

                <div className={style.about}>
                    <div className={style.imgLeft}>
                        <img src={twoPin}/>
                    </div>
                    <div className={style.aboutInfo}>
                        <div className={style.aboutTitle}>
                            About Whoosh
                        </div>
                        <div className={style.aboutText}>
                            <span>
                            Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods
                        </span>
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.title}>
                        menu
                    </div>
                    <div className={style.nav}>
                        <ul className={style.links}>
                            <li className={style.link}>
                                <Link to="#"> About company</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Contact</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Rules</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> FAQ</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Reviews</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Cargo transportation</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Tariffs</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={style.item}>
                    <div className={style.title}>
                        services
                    </div>
                    <div className={style.nav}>
                        <ul className={style.links}>
                            <li className={style.link}>
                                <Link to="#">Online stores</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#">Legal entity</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#">API Integration</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#"> Contract</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#">Jobs</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#">Courier job</Link>
                            </li>
                            <li className={style.link}>
                                <Link to="#">The blog</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={style.item}>
                    <div className={style.title}>
                        contact us
                    </div>
                    <div className={style.nav}>
                        <div className={style.nav}>
                            <Link className={style.tel} to="#">8 800 934 5959</Link>
                        </div>
                    </div>
                    <div className={style.location}>
                        <div className={style.pin}>
                            <img src={FooterPin}/>
                        </div>
                        <div className={style.locationText}>
                            2545 W. Diversey Ave.<br/>
                            3rd Floor Chicago, IL 60647
                        </div>
                    </div>
                    <div className={style.socialInner}>

                        <Link to="#" className={style.socialLink}>
                            <img src={f}/>
                        </Link>
                        <Link to="#" className={style.socialLink}>
                            <img src={vk}/>
                        </Link>
                        <Link to="#" className={style.socialLink}>
                            <img src={youtube}/>
                        </Link>
                        <Link to="#" className={style.socialLink}>
                            <img src={insta}/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={style.FooterPyro}>
                <div className={style.borderFooter}>
                    <div className={style.lineFooter}></div>
                    <span className={style.madeBy}>
                        Made by
                    </span>
                    <div className={style.lineFooter}></div>
                </div>
                <div className={style.FooterPyroInner}>
                    <div className={style.footerLeft}>
                        © 2022. All rights reserved.
                    </div>
                    <div className={style.LogoPB}>
                        <img src={logoPyro}/>
                    </div>
                    <div className={style.footerRight}>
                        <img src={shield}/> <Link to="#">Privacy policy</Link>
                    </div>

                </div>


            </div>
        </div>);
}

export default Footer;

