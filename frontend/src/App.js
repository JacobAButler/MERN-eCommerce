import React, { Component } from 'react';
import './CSS/App.css';

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faker from 'faker';
import Container from './components/modalContiners/container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage'
import ProductList from './components/ProductList';





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
    const total=23;
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

      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Fragment>
      // <div className="App">
      //   <Grid className='appGrid'>
      //     <Row className='headerRow'>
      //       <Col className='NavBarColumn' >
      //       <NavBar className='NavBar'/>
      //       </Col>
      //       <Col className='headerButtonsColumn' end='xs'>
      //         <Row className='loginLogoutRow'>
      //           <Col className='loginButtonCol'>
      //             <Container 
      //               className = "login"
      //               triggerText={'Login'} 
      //               triggerType={'button'} 
      //               formType={'login'} />
      //           </Col>
      //           <Col className='registerButtonCol'>
      //             <Container className = 'register'
      //               triggerText={'Register'} 
      //               triggerType={'button'} 
      //               formType={'register'}/>
      //           </Col>
      //         </Row>
      //         <Row className='cartButtonCol'>
      //           <Container 
      //             className = 'cart'
      //             triggerText={'Cart'} 
      //             triggerType={'button'} 
      //             formType={'cart'}/>
      //         </Row>
      //       </Col>
      //       this
      //     </Row>
      //     <Row className='bodyRow'>
      //       <Col className='bodyRowSidePane'>this</Col>
      //       <Col className='bodyRowMainView'>
      //         <Row>
      //         {this.state.data.map(product => (
      //           <Col className='product' xOffset={11} xs={12} sm={5} lg={3} key={product._id.toString()} >
      //             <Container
      //               className = 'productCard' 
      //               triggerText={product.product_name} 
      //               triggerType={'image'} 
      //               formType={'product'} 
      //               info={product} 
      //               triggerImage={product.product_images[0]}/>
      //               <div>{product.product_name}</div>

      //           </Col>
      //           ))}
      //           </Row>
      //       </Col>
      //     </Row>
      //     <Row className='footerRow'>
      //       this footer
      //     </Row>
      //   </Grid>





      // </div>

    );
  }
}

export default App;

