import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Navigation from './Navigation'
import './App.css';

const App = (props) => (
  <div className="App">
    <Grid>
      <Row>
        <Col>
          <h1>DnD 5e Spellbook</h1>
          <Navigation />
          {props.children}
        </Col>
      </Row>
    </Grid>
  </div>
)

export default App;
