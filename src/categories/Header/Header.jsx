import React from "react";
import logo from "../../assets/img/Logo.svg"
import pin from "../../assets/img/Pin.svg"
import login from "../../assets/img/Login.svg"
import {Link} from "react-router-dom";
import style from "./Header.module.css";

const App = (props) => {
    return (
        <div className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
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

export default App;
