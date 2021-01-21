import React, {Component} from 'react';
import {Container, Row, Col, Nav, Card, Media} from "react-bootstrap";
import {AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {FaFacebookSquare, FaTwitterSquare, FaGooglePlay} from "react-icons/fa"
import {FOR_USERS, SERVICES, SITEMAP} from "../../constants/dataKeys";

const SOCIAL_PLATFORM = [
    {name: "Facebook", link: "https://www.facebook.com/GmailKing/", bgColor: "#009765", icon: <FaFacebookSquare style={{fontSize: 25}}/>},
    {name: "Linkedin", link: "https://www.linkedin.com/in/nitish-1610908/", bgColor: "#008578", icon: <AiFillLinkedin style={{fontSize: 25}}/>},
    {name: "Twitter", link: "#", bgColor: "#00717C", icon: <FaTwitterSquare style={{fontSize: 25}}/>},
    {name: "Instagram", link: "https://www.instagram.com/nitish_sharma_sharma/", bgColor: "#005C70", icon: <AiFillInstagram style={{fontSize: 25}}/>},
];

class Footer extends Component {
    render() {

        return (
            <Container className={"pt_56"}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h1 className={"primary_color"}>AMTICA</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <Nav
                           style={{paddingTop:25}}
                        >
                            {SOCIAL_PLATFORM.map((social) =>
                                <Nav.Item>
                                    <Nav.Link href={social.link} className={"social_link"} target={"_blank"}
                                              style={{background: social.bgColor}}>
                                        {social.icon}
                                    </Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <h3>Sitemap</h3>
                        <Nav className="flex-column">
                            {SITEMAP.map((sitemap) =>
                                <Nav.Link href={sitemap.activeLink ? sitemap.link : "#"} className={"padding_lr"}>
                                    {sitemap.label}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <h3>Services</h3>
                        <Nav className="flex-column">
                            {SERVICES.map((service) =>
                                <Nav.Link href={service.activeLink ? service.link : "#"} className={"padding_lr"}>
                                    {service.label}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <h3>For Users</h3>
                        <Nav className="flex-column">
                            {FOR_USERS.map((option) =>
                                <Nav.Link href={option.activeLink ? option.link : "#"} className={"padding_lr"}>
                                    {option.label}
                                </Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <h3>Our App</h3>
                        <Nav className="flex-column">
                            <Nav.Link href={"#"} className={"padding_lr"}>
                                <Card bg={'dark'} border={'dark'} text={'white'}>
                                    <Media>
                                        <img
                                            width={38}
                                            height={64}
                                            className="align-self-center"
                                            src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body style={{paddingTop: 8}}>
                                            <h5 style={{fontSize: 14, margin: 0}}>Download on the</h5>
                                            <p style={{fontSize: 19}}>App Store</p>


                                        </Media.Body>
                                    </Media>
                                </Card>
                            </Nav.Link>
                            <Nav.Link href={"#"} className={"padding_lr"}>

                                <Card bg={'dark'} border={'dark'} text={'white'}>
                                    <Media>
                                        <FaGooglePlay style={{width: 38, height: 64, padding: 5}}/>
                                        <Media.Body style={{paddingTop: 8}}>
                                            <h5 style={{fontSize: 14, margin: 0}}>GET IT IN</h5>
                                            <p style={{fontSize: 19}}>Google Play</p>


                                        </Media.Body>
                                    </Media>
                                </Card>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <hr/>
                <FooterTerms/>
            </Container>

        );
    }
}

export default Footer;

function FooterTerms(props) {
    return (
        <Row className={"footer_terms"}>
            <Col>
                <p>&#169; Amtica. All right reserved.</p>
            </Col>
            <Col >
                <p style={{float:'right'}}>Privacy & Cookies</p>
            </Col>
        </Row>
    )
}
