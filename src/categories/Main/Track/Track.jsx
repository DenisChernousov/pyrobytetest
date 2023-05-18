import style from "./Track.module.css";
import Search from "../../../assets/img/Search.svg";

const Track = (props) => {
    return (

        <div className={style.trackInner}>
            <span className={style.trackInnerTitle}>
              Track a package
            </span>
            <div className={style.trackInnerInputWrapper}>

                <input type="text" placeholder="Enter code" className={style.trackInnerInput}/>
                <button type="button" className={style.trackInnerBtn}>
                    <img src={Search}/>
                </button>
            </div>
        </div>
    );
}

export default Track;
