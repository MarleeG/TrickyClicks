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
    log('character array: ', character_array)
    // assign the value of the character_array to characters_copy
    // let characters_copy = character_array;
    // character_array = [{alt: '', src: '', clicked: bool}]
    let new_character_order = [];

    // indices that have been chosen already
    let index_tracker = [];
    let max = 0;
    debugger;

    // While the length of the index_tracker is less than or equal to 9
    log(`${index_tracker.length} >= 9 :: ${index_tracker.length <= 9}`)
    while(index_tracker.length <= 9 || max >= 11){
      // Generates a random whole number between 0-8
      max++;
      let random_idx = Math.floor(Math.random() * 9);
      log('random_idx: ', random_idx)
      log('length: ', index_tracker.length)


      // if the random index chosen does not exist,
      log(`${index_tracker.indexOf(random_idx)} === -1`);
      if (index_tracker.indexOf(random_idx) === -1) {
        // then push it to the index_tracker array
        // index_tracker.push(random_idx);
        index_tracker = [...index_tracker, random_idx]
      }
    }

    if (index_tracker.length === 9) {
      index_tracker.forEach(idx => {
        new_character_order = [...new_character_order, character_array[idx]]
      })
    }

    log(new_character_order)

  }



  render() {
    this.generateNewCharacterOrder(this.state.characters);

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
              <Characters characters={this.state.characters} />
            </Col>
          </Row>


        </Container>



      </div>
    );
  }
}

export default App;
