import React, { Component } from 'react';
import './CSS/App.css';
import NavBar from './components/NavBar';
import Card from './components/productCard';
import { Grid, Row, Col } from 'react-flexbox-grid';


const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
class App extends Component {

  render() {
    return (

      <Grid className = "Grid">
        <Row>
          <NavBar/>
        </Row>

        <Row>
        {names.map(name => (
          <Col xs={12} sm={5} lg={3}>
            <Card/>
          </Col>
        ))}
        </Row>
      </Grid>






      // <div className="outerContainer">
      //   <Row>
      //     <NavBar/>
      //   </Row>
      //
      //   <div className="productContainer">
      //     <Row>
      //       <Col xs />
      //
      //       <Col xs />
      //     </Row>
      //     <Row>
      //       <Col xs />
      //       <Card/><Card/><Card/><Card/>
      //       <Col xs />
      //       <Col xs />
      //     </Row>
      //   </div>
      //
      //
      //
      //
      // </div>
    );
  }
}

export default App;
