import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Animated } from "react-animated-css";


import '../App.css';

const CharacterStyles = {
    color: 'white',
    borderColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    characterImage: {
        width: '200px',
        height: 'auto',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '3px'
    }
}


const Characters = props => {
    // console.log(props.characters[0]);
    let image_holder1 = [];
    let image_holder2 = [];
    let image_holder3 = [];


    props.characters.forEach((character, idx) => {
        if(idx <= 2){
            image_holder1.push(
                <Col lg={3} key={idx}>
                    <img 
                        src={character.src} 
                        alt={character.alt} 
                        className={character.hover ? 'character_image my-2 animated pulse': 'character_image my-2'}
                        style={CharacterStyles.characterImage}
                        onClick={() => props.handleImageClick(character.alt)}
                        onMouseEnter={() => props.toggleHover(character.alt)}
                        onMouseLeave={() => props.toggleHover(character.alt)}
                    />
                </Col>
            )
        }else if(idx > 2 && idx <= 5){
            image_holder2.push(
                <Col lg={3} key={idx}>
                    <img 
                        src={character.src} 
                        alt={character.alt} 
                        className={character.hover ? 'character_image my-2 animated pulse': 'character_image my-2'}
                        style={CharacterStyles.characterImage}
                        onClick={() => props.handleImageClick(character.alt)}
                        onMouseEnter={() => props.toggleHover(character.alt)}
                        onMouseLeave={() => props.toggleHover(character.alt)}
                    />
                </Col>
            )
        }else if(idx > 5){
            image_holder3.push(
                <Col lg={3} key={idx}>
                    <img 
                        src={character.src} 
                        alt={character.alt} 
                        className={character.hover ? 'character_image my-2 animated pulse': 'character_image my-2'}
                        style={CharacterStyles.characterImage}
                        onClick={() => props.handleImageClick(character.alt)}
                        onMouseEnter={() => props.toggleHover(character.alt)}
                        onMouseLeave={() => props.toggleHover(character.alt)}
                    />
                </Col>
            )
        }
    })

    return (
        <div style={CharacterStyles} className='mt-2 mx-auto text-center'>
            <Container>
               

                {image_holder1.length === 3 && image_holder2.length === 3 && image_holder1.length === 3 &&
                    <div>
                        <Row className='justify-content-center'>
                            {image_holder1}
                        </Row>
                        <Row className='justify-content-center'>
                            {image_holder2}
                        </Row>
                        <Row className='justify-content-center'>
                            {image_holder3}
                        </Row>
                    </div>
                }


            </Container>

        </div>
    )
}

export default Characters;