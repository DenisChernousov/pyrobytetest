import style from "./Main.module.css";
import {Link, Outlet} from "react-router-dom";
import Vector from "../../assets/img/Vector.svg";
import Video from "../../assets/img/video.jpg";
import PlayBtn from "../../assets/img/Button_play.svg";
import Parcel from "./Parcel/Parcel";
import Track from "./Track/Track";
import OurService from "./OurService/OurService";

const Main = (props) => {
    return (

        <section className={style.main}>
            <div className={style.adaptive}>
                <Parcel/>
                <Track/>
                <OurService/>
            </div>
            <div className={style.container}>
                <div className={style.Infoinner}>
                    <div className={style.infoItem}>
                        <h1 className={style.title}>
                            Our service started
                            work in New York
                        </h1>
                    </div>
                    <div className={style.text}>
                        We make delivery exactly at the time you need - we can start to fulfill the order a few minutes
                        after it
                        arrives, or we can deliver on a specific day and hour.
                    </div>
                    <div>
                        <Link to="#" className={style.link}>Read more <img src={Vector}/></Link>
                    </div>
                    <div className={style.works}>
                        <div className={style.worksTitle}>
                            How it works
                        </div>
                        <div className={style.video}>
                            <div className={style.videoItem}>
                                <img className={style.videoItems} src={Video}/>
                                <Link to="#"><img className={style.play} src={PlayBtn}/></Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.actionInner}>
                    <Parcel/>
                    <Track/>
                </div>
            </div>
        </section>);
}

export default Main;
