import React, { Component } from 'react';
import './CSS/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Card from './components/productCard';
import Container from './components/modalContainer/modalContainer'
import { Grid, Row, Col } from 'react-flexbox-grid';


const apiURL = 'http://localhost:4000/shopping';
class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      data:[],
    }
  }

  async componentDidMount()
  {
    const response = await fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({data});
      });
  }

  render() {
    return (
        <Grid className = "Grid">
          <Row>
            <NavBar/>
          </Row>

          <Row>
          {this.state.data.map(product => (
            <Col xs={12} sm={5} lg={3}>
              <Container triggerText={product.product_name} props={product}/>

            </Col>
          ))}
          </Row>
        </Grid>


    );
  }
}

export default App;
