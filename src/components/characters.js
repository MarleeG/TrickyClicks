import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

const CharacterStyles = {
    color: 'white',
    borderColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid'
}
const Characters = props => {
    // console.log(props.characters[0]);
    return (
        <div style={CharacterStyles} className='mt-5 mx-auto text-center'>
            <Container>
                {/* <img src={props.characters[0].src} alt={props.characters[0].alt} /> */}
                <Row>
                    {props.characters.map((character, idx) => {
                        return (

                            <Col lg={3} key={idx}>
                                <img src={character.src} alt={character.alt} />
                            </Col>

                        )
                    })}

                </Row>
            </Container>

        </div>
    )
}

export default Characters;