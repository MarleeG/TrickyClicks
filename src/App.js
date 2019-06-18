import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// Character Images
import Poca from './images/characters/poca.jpg';
import JSmith from './images/characters/john_smith.jpg';
import Meeko from './images/characters/meeko.jpg';
import Flit from './images/characters/flit.jpg';
import GMWillow from './images/characters/gma_willow.jpg';
import PHatan from './images/characters/powhatan.jpg';
import Nakoma from './images/characters/nakoma.jpg';
import Percy from './images/characters/percy.jpg';
import Kocoum from './images/characters/kocoum.jpg';


import './App.css';

// Components
import Header from './components/header';
import Characters from './components/characters';

const log = console.log;

class App extends Component {

  state = {
    characters: [
      { alt: 'Pocahontas', src: Poca, clicked: false },
      { alt: 'John Smith', src: JSmith, clicked: false },
      { alt: 'Meeko', src: Meeko, clicked: false },
      { alt: 'Flit', src: Flit, clicked: false },
      { alt: 'Grandmother Willow', src: GMWillow, clicked: false },
      { alt: 'Powhatan', src: PHatan, clicked: false },
      { alt: 'Nakoma', src: Nakoma, clicked: false },
      { alt: 'Percy', src: Percy, clicked: false },
      { alt: 'Kocoum', src: Kocoum, clicked: false },
    ]
  }

  generateNewCharacterOrder = character_array => {
    // Example Data
    // character_array = [{alt: '', src: '', clicked: bool}]
    let new_character_order = [];

    // indices that have been chosen already
    let index_tracker = [];
    let max = 0;

    // Continue the loop while the max is less than or equal to character_array's length - 1
    while(max <= (character_array.length - 1)){

      // Generates a random whole number between 0-8
      let random_idx = Math.floor(Math.random() * 9);

      // if the index does not exist in index_tracker array then add it to index_tracker array
      if(index_tracker.indexOf(random_idx) === -1){
        index_tracker = [...index_tracker, random_idx];
        max++;
        // log('max: ', max)
      }
    }
    
    // log('length: ', index_tracker.length);
    // log(`index tracker: ${index_tracker}`);
    index_tracker.forEach(each_idx => new_character_order = [...new_character_order, character_array[each_idx]]);

    this.setState({
      characters: new_character_order
    });
  }

  // Create a function that updates the state of the application for the score
  // when an image is clicked
  handleImageClick = character => {
    log(`Character: ${character}`);

    this.generateNewCharacterOrder(this.state.characters);
  }

  render() {
    // this.generateNewCharacterOrder(this.state.characters);

    return (
      <div className="app_container">
        <Container>
          <Row>
            <Col lg={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Characters characters={this.state.characters} handleImageClick={char => this.handleImageClick(char)}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;