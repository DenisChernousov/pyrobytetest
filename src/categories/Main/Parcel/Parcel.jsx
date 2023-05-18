import style from "./Parcel.module.css";
import onFoot from "../../../assets/img/OnFoot.svg"
import Car from "../../../assets/img/Car.svg"
import Truck from "../../../assets/img/Truck.svg"
import topPin from "../../../assets/img/PinLock.svg";
import line from "../../../assets/img/vertical.svg";
import pinBottom from "../../../assets/img/pinBottom.svg";
import x from "../../../assets/img/x.svg";
import React, {useState} from "react";
import {findDOMNode} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            opacity: false
        };
    }

    toggle() {

        const tooltipNode = findDOMNode(this);

        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop, left: tooltipNode.offsetLeft
        })
    }

    render() {
        const styleTool = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 30,
            left: (this.state.left || 0) - 10,
            position: "absolute",
            fontFamily: 'Intro Book',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            color: "#1D253C",
            background: "#FFFFFF",
            boxShadow: "0px 16px 16px rgba(73, 99, 176, 0.16)",
            border: "1px solid rgba(183, 198, 231, 1)",
            padding: "8px 16px",
            transition: "opacity  .7s"
        }

        return (

            <div>
                <div className={style.i} onMouseEnter={this.toggle}
                     onMouseLeave={this.toggle}></div>
                <div style={styleTool}>
                    A commission is a piece of work that someone is asked to do and is paid for.
                </div>
            </div>)
    }

}


const Parcel = (props) => {


    const [inLocation, setInLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    return (

        <div className={style.inner}>
            <form>
                <div className={style.title}><h3>Send a Parcel</h3>


                    <Tooltip/>


                </div>

                <Tabs id="controlled-tabs" selectedTabClassName={style.switchBtnAvtive}>


                    <TabList className={style.switch}>
                        <Tab className={style.switchBtn}>
                            <input type="radio" className={style.switchBtnInput}/>
                            <img className={style.switchBtnImgFoot} src={onFoot}/>
                            <span className={style.switchBtnText}>up to 10lb</span>

                        </Tab>
                        <Tab className={style.switchBtn + ' ' + style.switchBtnActive}>

                            <input type="radio" className={style.switchBtnInput}/>
                            <img className={style.switchBtnImg} src={Car}/>
                            <span className={style.switchBtnText}>up to 10lb</span>
                        </Tab>
                        <Tab className={style.switchBtn}>
                            <input type="radio" className={style.switchBtnInput}/>
                            <img className={style.switchBtnImg} src={Truck}/>
                            <span className={style.switchBtnText}>up to 10lb</span>
                        </Tab>
                    </TabList>

                    <div className={style.locationWrapper}>

                        <div className={style.locationProgressBar}>
                            <img src={topPin}/>
                            <img src={line} className={style.lineImg}/>
                            <img src={pinBottom}/>
                        </div>
                        <TabPanel>
                            <div className={style.locationInputs}>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={inLocation}
                                           onChange={(e) => setInLocation(e.target.value)}
                                           placeholder="location"
                                           className={style.locationField}/>
                                </div>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={toLocation}
                                           onChange={(e) => setToLocation(e.target.value)}
                                           placeholder="location" className={style.locationField}/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={style.locationInputs}>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={inLocation}
                                           onChange={(e) => setInLocation(e.target.value)}
                                           placeholder="location" className={style.locationField}/>
                                </div>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={toLocation}
                                           onChange={(e) => setToLocation(e.target.value)}
                                           placeholder="location" className={style.locationField}/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={style.locationInputs}>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={inLocation}
                                           onChange={(e) => setInLocation(e.target.value)}
                                           placeholder="location" className={style.locationField}/>
                                </div>
                                <div className={style.LocationInput}>
                                    <span className={style.locationTitle}>Pickup location</span>
                                    <input type="text"
                                           value={toLocation}
                                           onChange={(e) => setToLocation(e.target.value)}
                                           placeholder="location" className={style.locationField}/>
                                </div>
                            </div>
                        </TabPanel>

                    </div>

                    <button type="button" className={style.btnBlue}>Order</button>
                    <div className={style.btnClearBox}>
                        <button onClick={() => {
                            setToLocation("",
                                setInLocation(""));
                        }}
                                type="button" className={style.btnBlueClear}>
                            <img src={x}/> Clear
                        </button>
                    </div>

                </Tabs>

            </form>
        </div>
    );
}

export default Parcel;
