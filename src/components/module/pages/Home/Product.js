import React, {Component} from 'react';
import {Container, Card, Button, Media, Row, Col} from "react-bootstrap";

class Product extends Component {
    render() {
        return (<>
                <Container className={'mtb_30'}>
                    <Card className={"card_img card_border"}>
                        <Card.Body>
                            <div className={'product_1'}>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    No matter how far along you are in your sophistication as an amateur.
                                </Card.Text>
                                <Button variant="primary">Discover</Button>
                            </div>
                            <div style={{float: 'right', color: '#ffff'}}>
                                <h3>Seller Name</h3>
                                <p>Westbengal, Kolkata</p>
                            </div>
                        </Card.Body>
                    </Card>

                </Container>
                <Container className={'mtb_30'}>
                    <Card className={"card_border card_img_2"}>
                        <Card.Body>

                        </Card.Body>
                        <Card.Footer className={"card_footer_border"}>
                            <Row>
                                <Col xs={8} sm={8} md={10} lg={10} xl={10}>
                                    <Media>
                                        <div style={{padding: 20}}>
                                            <h4>Title</h4>
                                        </div>
                                        <Media.Body>
                                            <h5>Heading</h5>
                                            <p>No matter how far along you are in your sophistication as an amateur.</p>
                                        </Media.Body>
                                    </Media>
                                </Col>
                                <Col xs={4} sm={4} md={2} lg={2} xl={2}>
                                    <div className={'card_footer_btn'}>
                                        <Button variant="primary">Discover</Button>
                                    </div>

                                </Col>
                            </Row>

                        </Card.Footer>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Product;
