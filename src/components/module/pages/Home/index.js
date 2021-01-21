import React, {Component} from 'react';
import Slider from "./Slider";
import AppBase from "../../../base/AppBase";
import Product from "./Product";

class Home extends Component {
    render() {
        return (
            <AppBase >
                <Slider/>
                <Product/>
            </AppBase>
        );
    }
}

export default Home;
