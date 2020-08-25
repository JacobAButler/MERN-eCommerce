import React, { Component } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Faker from 'faker';
import Container from './components/modalContiners/container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from './components/NavBar';




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
    // const response = await fetch(apiURL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({data});
    //   });
    //   console.log(this.state.data)
    let data = this.getFakerData();
    this.setState({data});
  }

  getFakerData(){
    const total=32;
    let counter;
    const response = [];

    for(counter = 0; counter<total;counter++)
    {
      response[counter] = {}
      response[counter]["_id"] = counter.toString();
      response[counter]["product_name"]= Faker.commerce.productName();
      response[counter]["product_description"]= Faker.lorem.sentence();
      response[counter]["product_price"]= Faker.commerce.price();
      response[counter]["product_quantity"] = Faker.random.number();
      response[counter]["product_images"]= this.imageArray();
    }
    return response;

  }




  imageArray()
  {
    let imageArray = [];
    let range = Math.floor(Math.random() * 5) + 3;
    for(let i =0; i<=range;i++)
    {

      imageArray.push(Faker.internet.avatar());
    }

    return imageArray;
  }


  render() {
    return (
        <Grid className = "Grid">
          <Container triggerText={'Login'} triggerType={'button'} formType={'login'} />
          <Container triggerText={'Register'} triggerType={'button'} formType={'register'}/>
          <Container triggerText={'Cart'} triggerType={'button'} formType={'cart'} />
          <Row>
            <NavBar/>
          </Row>

          <Row>
          {this.state.data.map(product => (
            <Col xs={12} sm={5} lg={3} key={product._id.toString()}>
              {/* <Container triggerText={product.product_name} props={product}/> */}
              <Container triggerText={product.product_name} triggerType={'image'} formType={'product'} info={product} triggerImage={product.product_images[0]} />
            <div>{product.product_name}</div>

            </Col>
            
          ))
          }
          
          </Row>
          <Counter />
        </Grid>


    );
  }
}

export default App;

