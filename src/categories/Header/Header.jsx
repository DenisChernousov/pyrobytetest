import React from "react";
import logo from "../../assets/img/Logo.svg"
import pin from "../../assets/img/Pin.svg"
import login from "../../assets/img/Login.svg"
import {Link} from "react-router-dom";
import style from "./Header.module.css";
import Burger from "./Burger/Burger";
import searchIcon from "../../assets/img/Search.svg";


const Header = (props) => {
    return (

        <div className={style.header}>
            <div className={style.burgerInner}>
<Burger/>
            </div>
            <div className={style.leftSect}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div></div>
                <div className={style.navBox}>
                    <div className={style.geo}>
                        <img src={pin}/><Link to="#">NY, Manhattan</Link>
                    </div>

                    <div className={style.search}>
                        <input type="text" placeholder="Track a Package"/>
                    </div>
                    <div className={style.nav}>
                        <Link to="#" className={style.linkItem}>Send a Parcel</Link>
                        <Link to="#" className={style.linkItem}>Become a Courier</Link>
                        <Link to="#" className={style.linkLogin}><img src={login}/></Link>
                    </div>

            </div>
        </div>
    );
}

export default Header;
