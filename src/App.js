import './Reset.css';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./categories/Header/Header";
import Main from "./categories/Main/Main";
import Delivery from "./categories/Delivery/Delivery";
import Line from "./categories/Line/Line";
import Parthners from "./categories/Parthners/Parthners";
import Since from "./categories/Since/Since";
import Footer from "./categories/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Delivery/>
                <Line />
                <Parthners />
                <Line />
               <Since/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

