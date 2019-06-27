import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import '../App.css';

const HeaderStyles = {
    container: {
        backgroundColor: 'white',
        padding: '30px',
    },
    heading: {
        color: 'black',
        fontSize: '60px',
    }
}

const Header = (props) => {
    return (
        <div style={HeaderStyles.container} className='mt-3 mx-auto text-center amatic'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1
                            style={HeaderStyles.heading}
                        >
                            Tricky Clicks
                    </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className='float-right'>Score: {props.currentScore}</h4>
                    </Col>
                    <Col>
                        <h4 className='text-center'>Top Score: {props.topScore}</h4>
                    </Col>
                    <Col>
                        <h4 className='float-left'>Attempts: {props.attemptsLeft}</h4>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Header;