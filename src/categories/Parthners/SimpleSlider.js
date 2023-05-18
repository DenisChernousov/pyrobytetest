import React, {Component} from "react";
import Slider from "react-slick";
import style from "./Parthners.module.css";
import Alva from "../../assets/img/AlvaColor.svg";
import tendo from "../../assets/img/tendo.svg";
import fagor from "../../assets/img/fagor.svg";
import radioSh from "../../assets/img/radioshack.svg";
import guitarCenter from "../../assets/img/GuitarCenter.svg";
import {Link} from "react-router-dom";
import "./simple.css";


class CustomSlide extends Component {
    render() {
        const {index, ...props} = this.props;
        return (
            <div {...props} >
                <img className="slickImg" src={index}/>
            </div>

        );
    }
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            centerPadding: "60px",

            centerMode: false,
            infinite: true,
            lazyLoad: 'ondemand',
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,

            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,

                        centerPadding: "70px",
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (

            <Slider  {...settings}>
                <Link to="#"> <CustomSlide index={Alva}/></Link>
                <Link to="#"> <CustomSlide index={tendo}/></Link>
                <Link to="#"> <CustomSlide index={fagor}/></Link>
                <Link to="#"> <CustomSlide index={radioSh}/></Link>
                <Link to="#"> <CustomSlide index={guitarCenter}/></Link>
                <Link to="#"> <CustomSlide index={Alva}/></Link>
                <Link to="#"> <CustomSlide index={tendo}/></Link>
                <Link to="#"> <CustomSlide index={fagor}/></Link>
                <Link to="#"> <CustomSlide index={radioSh}/></Link>
                <Link to="#"> <CustomSlide index={guitarCenter}/></Link>
            </Slider>

        )
    }
}

// export default SimpleSlider;