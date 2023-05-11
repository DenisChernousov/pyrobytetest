import './Reset.css';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./categories/Header/Header";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
            </div>
        </BrowserRouter>
    );
}

export default App;
