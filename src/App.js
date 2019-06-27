import React, { Component } from 'react';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';

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
import ClickAlert from './components/click_alert';

class App extends Component {

  state = {
    characters: [
      { alt: 'Pocahontas', src: Poca, clicked: false, hover: false },
      { alt: 'John Smith', src: JSmith, clicked: false, hover: false },
      { alt: 'Meeko', src: Meeko, clicked: false, hover: false },
      { alt: 'Flit', src: Flit, clicked: false, hover: false },
      { alt: 'Grandmother Willow', src: GMWillow, clicked: false, hover: false },
      { alt: 'Powhatan', src: PHatan, clicked: false, hover: false },
      { alt: 'Nakoma', src: Nakoma, clicked: false, hover: false },
      { alt: 'Percy', src: Percy, clicked: false, hover: false },
      { alt: 'Kocoum', src: Kocoum, clicked: false, hover: false },
    ],
    topScore: 0,
    currentScore: 0,
    gameAlert: { message: '', variant: '' },
    showModal: false,
    modalTitle: '',
    modalBody: '',
    attemptsLeft: 3,
    characterBorderColor: 'black'
  }

  modalContent = (title, body) => {
    this.setState({
      modalTitle: title,
      modalBody: body,
      showModal: true
    });
  }

  // Handles when a user hovers an image
  toggleHover = (character) => {
    // makes a copy of characters in state
    let characters_copy = this.state.characters;

    // finds the character that the user is hovering on 
    // and updates the hover status
    characters_copy.forEach(char => {
      if (char.alt === character) {
        char.hover = !char.hover;
      }
    });

    // sets the new value of the characters' state for the updated value
    this.setState({
      characters: characters_copy
    });
  }

  // generates new character order when a user clicks on character
  generateNewCharacterOrder = character_array => {
    // Example Data
    // character_array = [{alt: '', src: '', clicked: bool}]
    let new_character_order = [];

    // indices that have been chosen already
    let index_tracker = [];
    let max = 0;

    // Continue the loop while the max is less than or equal to character_array's length - 1
    while (max <= (character_array.length - 1)) {

      // Generates a random whole number between 0-8
      let random_idx = Math.floor(Math.random() * 9);

      // if the index does not exist in index_tracker array then add it to index_tracker array
      if (index_tracker.indexOf(random_idx) === -1) {
        index_tracker = [...index_tracker, random_idx];
        max++;
      }
    }

    // gets the randomly generated indices and uses them to jumble the 
    // character list and stores it in the new_character_order array
    index_tracker.forEach((each_idx, index) => {
      new_character_order = [...new_character_order, character_array[each_idx]];

      // resets hover back to false for each character
      if(index === 8){
        new_character_order.forEach(char => {
          char.hover = false;
        });
      }
    });

    // sets the new order of the characters
    this.setState({
      characters: new_character_order
    });
  }

  // updates the state of the application for the score
  // when an image is clicked
  handleImageClick = characterClicked => {
    // makes a copy of characters in state
    let character_images_copy = this.state.characters;

    // character_array = [{alt: '', src: '', clicked: bool}]
    character_images_copy.forEach(char => {
      // if char is the same as the character clicked and
      // it has not been clicked yet then...
      if (char.alt === characterClicked && char.clicked === false) {
        // set the clicked value to true
        char.clicked = true;
        

        // add one to the currentScore
        this.setState({
          currentScore: this.state.currentScore + 1,
          characterBorderColor: 'green',
          gameAlert: { message: `Correct!`, variant: 'success' }
        }, () => {
          // if the topScore is less than the currentScore then
          // set the value of the currentScore to the topScore
          if (this.state.topScore < this.state.currentScore) {
            // set the state of topScore to currentScore
            this.setState({
              topScore: this.state.currentScore
            })
          }
          // if currentScore is 9 then you've won the game!
          // Ask user to play again
          if (this.state.topScore === 9 || this.state.currentScore === 9) {
            this.setState({
              gameAlert: { message: `You've won the game!`, variant: 'success' },
              showModal: true,
              modalTitle: `Congrats!`,
              modalBody: `You've won the game!`
            });
          }
        });
        // if character selected by the user and character has already been clicked then..
        // do no increase score. Show alert message
      } else if (char.alt === characterClicked && char.clicked === true) {
        this.setState({
          gameAlert: { message: 'Incorrect!', variant: 'danger' },
          attemptsLeft: this.state.attemptsLeft - 1,
          characterBorderColor: 'red'
        }, () => {
          if(this.state.attemptsLeft === 0){
            this.modalContent('Uh-oh!', `You have no more attempts remaining. Try again to beat the game!`)
          }
        })
      }
    });

    this.generateNewCharacterOrder(this.state.characters);
  }

  // closes modal & restarts game
  handleClose = () => {
    if (this.state.modalTitle !== 'Instructions') {
      // create a copy of the characters in state
      let characters_copy = this.state.characters;

      // set default values of characters back to original values
      characters_copy.forEach(char => {
        char.clicked = false;
        char.hover = false;
      });

      this.setState({
        showModal: false,
        gameAlert: { message: 'Game has restarted!', variant: 'success' },
        topScore: 0,
        currentScore: 0,
        characters: characters_copy,
        characterBorderColor: 'black',
        attemptsLeft: 3
      }, () => {
        this.generateNewCharacterOrder(this.state.characters);
      });
    } else {
      this.setState({
        showModal: false,
      })
    }
  }

  // Game modal
  // This will only appear if you've won the game
  // On close it will restart the game
  modal = () => {
    return (
      <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>{this.state.modalBody}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
        </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  componentDidMount(){
    this.modalContent(
      `Instructions`,
      `Click on a image one time to earn earn a point. If you click on an image more than once you will not gain a point.`
    )
  }

  render() {
    return (
      <div className = "app_container">
        <Container>
          {(this.state.showModal || this.state.topScore === 9 || this.state.currentScore === 9) && this.modal()}
          {/* Header */}
          <Row>
            <Col lg={12}>
              <Header
                topScore={this.state.topScore}
                currentScore={this.state.currentScore}
                attemptsLeft={this.state.attemptsLeft}
              />
            </Col>
          </Row>
          {/* ClickAlert */}
          <Row>
            <Col lg={12}>
              <ClickAlert
                gameAlert={this.state.gameAlert}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Characters
                characters={this.state.characters}
                handleImageClick={char => this.handleImageClick(char)}
                toggleHover={(x) => this.toggleHover(x)}
                characterBorderColor={this.state.characterBorderColor}
              />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default App;