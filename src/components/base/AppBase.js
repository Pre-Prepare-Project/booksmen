import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

class AppBase extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Container fluid className={"footer_section"}>
                    <Footer/>
                </Container>

            </div>
        );
    }
}

export default AppBase;
