import React, {Component} from "react";
import Slider from "react-slick";
import style from "./Parthners.module.css";
import Gpay from "../../assets/img/Gpay.png";
import sofort from "../../assets/img/sofort.jpg";
import unionpay from  "../../assets/img/unionPay.jpg";
import  visa from "../../assets/img/visa.jpg";
import mastercard from "../../assets/img/mastercard.jpg";
import amex from "../../assets/img/amex.jpg";
import {Link} from "react-router-dom";

import  "./slick.css";

import "./slick-theme.css";

class CustomSlide extends Component {
    render() {
        const {index, ...props} = this.props;
        return (
            <div {...props} >
                <img className="paymentSlider" src={index}/>
            </div>

        );
    }
}

export default class PaymentSlider  extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: true,
            className: "PaymentSlider",
            centerPadding: "0",
            centerMode: false,
            infinite: true,
            lazyLoad: 'ondemand',
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: "100px",
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (

            <Slider  {...settings}>
                <Link to="#"> <CustomSlide index={Gpay}/></Link>
                <Link to="#"> <CustomSlide index={sofort}/></Link>
                <Link to="#"> <CustomSlide index={unionpay}/></Link>
                <Link to="#"> <CustomSlide index={visa}/></Link>
                <Link to="#"> <CustomSlide index={mastercard}/></Link>
                <Link to="#"> <CustomSlide index={amex}/></Link>
                <Link to="#"> <CustomSlide index={Gpay}/></Link>
                <Link to="#"> <CustomSlide index={sofort}/></Link>
                <Link to="#"> <CustomSlide index={unionpay}/></Link>
                <Link to="#"> <CustomSlide index={visa}/></Link>
                <Link to="#"> <CustomSlide index={mastercard}/></Link>
                <Link to="#"> <CustomSlide index={amex}/></Link>
            </Slider>

        )
    }
}

// export default SimpleSlider;