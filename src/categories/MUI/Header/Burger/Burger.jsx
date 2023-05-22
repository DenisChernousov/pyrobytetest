import React, {useState} from "react";
import style from "./Burger.css";
import loginBtn from "../../../../assets/img/login360.svg";
import logo from "../../../../assets/img/Logo.svg";
import pin from "../../../../assets/img/Pin.svg";
import searchIcon from "../../../../assets/img/search360.svg";
import {Link} from "react-router-dom";

const Burger = (props) => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


    return (
        <div className="burger">
            <div className="burgerInner">
                <div className="login">
                    <img src={loginBtn}/>
                </div>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </div>
            <div className={menu_class}>
                <div className="geo">
                    <img src={pin}/><Link to="#">NY, Manhattan</Link>
                </div>
                <div className="trackInner">
                    <input type="text" placeholder="OurService a Package"/>
                    <button><img src={searchIcon}/> </button>
                </div>
                <div className="navigation">
                    <ul>
                        <li><Link to="#">Send a Parcel</Link></li>
                        <li><Link to="#">Become a Courier</Link></li>
                        <li><Link to="#">Affiliate Program</Link></li>
                        <li><Link to="#">Help & Support</Link></li>

                    </ul>
                </div>
                <div className="Take">
                    <Link to="#">Take a complex order</Link>
                </div>
            </div>
        </div>
    )
}

export default Burger;