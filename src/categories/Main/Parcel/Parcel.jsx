import style from "./Main.module.css";
import {Link} from "react-router-dom";
import Vector from "../../assets/img/Vector.svg";
import Video from "../../assets/img/video.jpg";
import PlayBtn from "../../assets/img/Button_play.svg";
import iImg from "../../assets/img/i.svg";

const Main = (props) => {
    return (

        <div className={style.main}>
            <div className={style.infoInner}>
                <div className={style.infoItem}>
                    <h1 className={style.info}>
                        Our service started
                        work in New York
                    </h1>
                </div>
                <div className={style.infoText}>
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
                            <img src={Video}/>
                            <Link to="#"><img src={PlayBtn}/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.actionInner}>
                <div className={style.Parcel}>
                    <div className={style.parcelTitle}>Send a Parcel <img src={iImg}/></div>
                </div>
                <div className={style.trackInner}>

                </div>
            </div>

        </div>

    )
        ;
}

export default Main;
