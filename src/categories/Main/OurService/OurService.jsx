import style from "./OurService.module.css";
import Search from "../../../assets/img/Search.svg";
import {Link} from "react-router-dom";
import Vector from "../../../assets/img/Vector.svg";
import Video from "../../../assets/img/video.jpg";
import PlayBtn from "../../../assets/img/Button_play.svg";

const OurService = (props) => {
    return (

        <div className={style.Inner}>
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
                        <div className={style.pagging}>
                            <button className={style.paggingPage + ' ' + style.active}>
                            </button>
                            <button className={style.paggingPage}>
                            </button>
                            <button className={style.paggingPage}>
                            </button>
                            <button className={style.paggingPage}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurService;
