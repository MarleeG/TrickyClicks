import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './App.css';

// Components
import Header from './components/header';
import Characters from './components/characters';

class App extends Component {
  render() {
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
              <Characters />
            </Col>
          </Row>
          
        
        </Container>
        


      </div>
    );
  }
}

export default App;
