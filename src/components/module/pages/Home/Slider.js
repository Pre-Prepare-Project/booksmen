import React, {Component} from 'react';
import {Carousel, Container, Row, Col, Form, InputGroup, Button} from "react-bootstrap";
import {FaSearch} from "react-icons/fa"
import windowSize from 'react-window-size';
import sider1 from "../../../../assets/slider1.jpeg"
import sider2 from "../../../../assets/slider2.jpeg"
import sider3 from "../../../../assets/slider3.jpeg"
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex
        })
    }

    render() {
        let {index} = this.state
        return (
            <Carousel activeIndex={index} onSelect={this.handleSelect} className={"mt_56"} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{top: this.props.windowWidth >= 768 ? "25%" : "0"}}>
                        <CarouselCaption {...this.props}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{top: this.props.windowWidth >= 768 ? "25%" : "0"}}>
                        <CarouselCaption {...this.props}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{top: this.props.windowWidth >= 768 ? "25%" : "0"}}>
                        <CarouselCaption {...this.props}/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

    }
}

export default windowSize(Slider);

function CarouselCaption(props) {
    return (
        <Container>
            <Row>
                <Col sm={{span: 10}} md={{span: 10}}
                     lg={{span: 6}} xl={{span: 6}}>
                    {props.windowWidth >= 768 ?
                        <h2>Find Great Deal Customized For You Need</h2>
                        : <h6>Find Great Deal Customized For You Need</h6>}

                    <Form.Row>
                        <Form.Group as={Col}>
                            <InputGroup size={props.windowWidth >= 768 ? "lg" : "sm"}>
                                <Form.Control
                                    style={{border: 0}}
                                    type="text"
                                    placeholder="Search Service Or Product"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>
                                        <FaSearch className={"primary_color"}/>
                                    </InputGroup.Text>
                                </InputGroup.Append>

                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form className={"d-sm-none d-md-block"}>
                        <div key={'inline-form'} className="mb-3">
                            <div style={{float: "left"}}>
                                <Form.Check
                                    inline
                                    label="Product"
                                    type={'radio'}
                                    id={'product'}
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Service"
                                    type={'radio'}
                                    id={'service'}
                                    name="formHorizontalRadios"
                                />
                                <Form.Check
                                    inline
                                    label="Jobs"
                                    type={'radio'}
                                    id={'jobs'}
                                    name="formHorizontalRadios"
                                />
                            </div>
                            <Button variant="link" className={"advanced_search"}>Advanced
                                Search</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}
